import re
import tempfile

class EM_InterfaceVerification(object):
    
    def __init__(self, fqdn, neuser, nepwd):
        self.fqdn = fqdn
        self.neuser = neuser
        self.nepwd = nepwd
        
    def parseCommandOutput(self, command_result, expected_result):
        pattern = re.compile(expected_result)
        m = pattern.search(command_result)
        if m is not None:
            print m.group(), "is found. This script execution is successful"
            return True
        else:
            raise AssertionError, command_result              
         
    def returnAOMActivationCommand(self, fqdn, aom_script_path):
        return aom_script_path + " " + fqdn
    
    def returnNSAPAddress(self, raw_address):
        return raw_address[-15:-2]
    
    def createLocalExpectScript(self, q3_mml_command, interact_command):
        q3_mml_command = q3_mml_command + '\n'
        if interact_command:
            self.expect_list = ['#! /usr/bin/expect\n', 'set timeout 30\n', q3_mml_command, 'expect "MAIN LEVEL COMMAND"\n', 'send "ZQNI;\\r"\n', 'send "ZZZZ;\\r"\n', 'expect eof\n']
        else:
            self.expect_list = ['#! /usr/bin/expect\n', 'set timeout 30\n', q3_mml_command, 'expect "MAIN LEVEL COMMAND"\n', 'send "ZZZZ;\\r"\n', 'expect eof\n']
        (_ , filename) = tempfile.mkstemp('.exp', 'q3_mml_')
        f = open(filename, 'w')
        f.writelines(self.expect_list)
        f.close()
        self.filecontent = []
        self.filecontent.append(filename)
        return self.filecontent        
    
    def returnQ3MMLCommand(self, q3_mml_script_path, nsap_address, subnet, option_dict):
        options = ''
        option_list = option_dict.keys()
        if 'fqdn' in option_list:
            options = options + ' -fqdn ' + option_dict['fqdn']
        if 'neuser' in option_list:
            options = options + ' -neuser ' + option_dict['neuser']
        if 'nepwd' in option_list:
            options = options + ' -nepwd ' + option_dict['nepwd']
        if 'nsap' in option_list:
            option_dict['nsap'] = nsap_address
            options = options + ' -nsap ' + option_dict['nsap']            
        if 'subnet' in option_list:
            option_dict['subnet'] = subnet
            options = options + ' -subnet ' + option_dict['subnet']            
        if 'parent' in option_list:
            options = options + ' -parent ' + option_dict['parent']    
        for eachoption in option_list:
            if eachoption not in options:
                options = options + ' -' + str(eachoption) + ' ' + str(option_dict[str(eachoption)])
        self.q3_mml_command = 'spawn ' + q3_mml_script_path + options
        return self.q3_mml_command
    
    def returnAoMActivationCommand(self, aom_activation_script_path, option_dict):
        options = ''
        option_list = option_dict.keys()
        for eachoption in option_list:
            if eachoption not in options:
                options = options + ' ' +  str(option_dict[str(eachoption)])
        self.aom_activation_command = aom_activation_script_path + ' ' + options
        return self.aom_activation_command    
    
    def returnExpectFilePath(self, remote_directory):
        pattern = re.compile(r'q3_mml.*\.exp')
        m = pattern.search(self.filecontent[0])
        if m is not None:
            expfilename = m.group()
        return remote_directory + str(expfilename)
    
    def returnQ3MMLExpectCommand(self, expect_file_path):
        return "expect " + expect_file_path
               
    def returnCNum(self):
        dash_num = self.fqdn.split('/')[1].index("-") + len(self.fqdn.split('/')[0]) + 1
        cnum_raw_string = '000000' + str(self.fqdn[dash_num + 1:])
        return cnum_raw_string[-6:]    
        
        








