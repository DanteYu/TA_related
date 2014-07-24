import re
import tempfile

class EM_InterfaceVerification(object):
    
    def __init__(self, fqdn, neuser, nepwd, subnet):
        self.fqdn = fqdn
        self.neuser = neuser
        self.nepwd = nepwd
        self.subnet = subnet
    
    
    def parseAOMActivationResult(self, command_result):
        pattern = re.compile(r'AoM activation is done already for the NE ')
        m = pattern.search(command_result)
        if m is not None:
            print m.group(), "is found. AoM activation is successful"
            return True
        else:
            raise AssertionError, command_result
        
    def returnAOMActivationCommand(self, fqdn, aom_script_path):
        return aom_script_path + " " + fqdn
    
    def returnNSAPAddress(self, raw_address):
        return raw_address[-15:-2]
    
    def createLocalExpectScript(self, q3_mml_command):
        q3_mml_command = q3_mml_command + '\n'
        self.expect_list = ['#! /usr/bin/expect\n', 'set timeout 30\n', q3_mml_command, 'expect "MAIN LEVEL COMMAND"\n', 'send "ZEEI;\\r"\n', 'expect eof\n']
        (_ , filename) = tempfile.mkstemp('.exp', 'q3_mml_')
        f = open(filename, 'w')
        f.writelines(self.expect_list)
        f.close()
        self.filecontent = []
        self.filecontent.append(filename)
        return self.filecontent
        
    def returnQ3MMLCommand(self, isBSC, nsap_address):
        if isBSC:
            self.q3_mml_command = 'spawn /etc/opt/oss/global/NSN-cmui/bin/launch_Q3_MML.sh -fqdn ' + self.fqdn + '  -neuser ' + self.neuser + ' -nepwd ' + self.nepwd + '  -nsap ' + str(nsap_address) + ' -subnet ' +  self.subnet
        else:
            self.q3_mml_command = 'spawn /etc/opt/oss/global/NSN-cmui/bin/launch_Q3_MML.sh -fqdn ' + self.fqdn + ' -parent -neuser ' + self.neuser + ' -nepwd ' + self.nepwd + '  -nsap ' + str(nsap_address) + ' -subnet ' +  self.subnet
        return self.q3_mml_command
    
    def returnExpectFilePath(self, remote_directory):
        return remote_directory + '/' + self.filecontent[0].split('\\')[-1]
    
    
    def returnQ3MMLExpectCommand(self, expect_file_path):
        return "expect " + expect_file_path
        
    def parseQ3MMLResult(self, command_result):
        pattern = re.compile(r'BASE STATION CONTROLLER HANDLING COMMAND ')
        m = pattern.search(command_result)
        if m is not None:
            print m.group(), "is found. Launch Q3 MML is successful"
            return True
        else:
            raise AssertionError, command_result        
        
        
        
        
