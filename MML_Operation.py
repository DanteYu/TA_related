import SSHLibrary
import telnetlib
import re
import time 


class AlarmObject(object):
    """
    Mml is a test library for Robot Framework which enables MML command execution from NE.
    
    Connection parameters to NE are given in library import.
     
    Example:
    |    Library    |    MmlAlarms    |    @{NE}    |
    
    => LIST__NE=["<HOST>","<USERNAME>","<PASSWORD>"]
    """


    
    def __init__(self, 
            host=None,          # ip address 
            username=None,      # username 
            password=None,alias=None, port=22, timeout=None, newline=None, prompt=None):     # password 

            self.host = host
            self.username = username
            self.password = password
            
 
            ssh= SSHLibrary.SSHLibrary()
            ssh.open_connection(host, alias, port, timeout, newline, prompt)
            
    def mml_operation(self, mmlCommand):
        """
        
        Executes given MML command in NE.
        Note: open_service_terminal method is needed before using this method.
        
        Example:
        |    open_service_terminal    |
        |    mml_operation    |    "ZOS:*,*,143,,,,,9786,,,1,XD2131,XW2,XW0,9,1,2,3,4,5,6,7,8,9"    |
        |    close_mml_session    |
        
        |    open_service_terminal    |
        |    mml_operation    |    ZLP:9,ALU    |
        |    mml_operation    |    Z9O:1,1:2018,ET,004    |
        |    close_mml_session    |
        
        """
            
        self.tn.write(str(mmlCommand)+'\r\n')
        returnValue = self.tn.read_until(">")
        print returnValue
        return returnValue
            
    def open_mml_session(self, host, username, password):
        """
        
        Opens mml connection using credentials given in library import.
        
        """
        try:
            
            print self.tn.read_until("ENTER USERNAME < ")
            self.tn.write(str(username)+'\r\n')
            print self.tn.read_until("ENTER PASSWORD < ")
            self.tn.write(str(password)+'\r\n')
            print self.tn.read_until("< ")
            
        except Exception:
            raise Exception, "Connection to NE failed. Check the host IP."
        
    def close_mml_session(self):
        """
        
        Closes mml connection to NE.
        
        """
        self.tn.write("ZE;\r\n")
        self.tn.write("Z;\r\n")
        self.tn.write("Z;\r\n")
        self.tn.close()
        
    def get_alarm_count(self):
        
        BSCreturnValue=self.mml_operation("ZAHO;")
        returnList = BSCreturnValue.split('\n')
        pattern = re.compile(r'(^[*]+ +ALARM)')
        alarmPattern = re.compile(r'( \d+ [A-Za-z].)')
        count = 0
        for line in returnList:
            m = pattern.search(line)
            alarmNumber = alarmPattern.search(line)
            if m is not None:
                count = count +1 
#             if alarmNumber is not None:
#                 print alarmNumber.group()
        BTSreturnValue = self.mml_operation("ZEOL;")
        returnList = BTSreturnValue.split('\n')
        for line in returnList:
            m = pattern.search(line)
            if m is not None:
                count = count +1 
        self.close_mml_session()
        return count
    
    def create_alarm(self):     
        count = 30
        error_pattern = re.compile(r'COMMAND EXECUTION FAILED')
        while count != 0:
            time.sleep(60)
            self.tn = telnetlib.Telnet(self.host)
            self.open_mml_session(self.host,self.username,self.password)
            OMU_command_result = self.mml_operation("ZDDS:OMU;")
            m = error_pattern.search(OMU_command_result)
            if m is not None:
                self.close_mml_session()
                count = count - 1
                print m.group(), "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
                continue
            else:
                self.mml_operation("ZOS:*,*,143,,,,,9786,,,0,XD00002244,,,9,1,2,3,4,5,6,7,8,9;")
                self.mml_operation("ZOS:*,*,143,,,,,9786,,,0,XD00002012,,,C,1,2,3,4,5,6,7,8,9,A,B,C;")
                self.mml_operation("ZOS:*,*,143,,,,,9786,,,0,XD00002131,,,9,1,2,3,4,5,6,7,8,9;")
                self.close_mml_session()
                break

        
    def cancel_alarm(self):
        count = 30
        error_pattern = re.compile(r'COMMAND EXECUTION FAILED')
        while count != 0:
            time.sleep(60)
            self.tn = telnetlib.Telnet(self.host)
            self.open_mml_session(self.host,self.username,self.password)
            OMU_command_result = self.mml_operation("ZDDS:OMU;")
            m = error_pattern.search(OMU_command_result)
            if m is not None:
                self.close_mml_session()
                count = count - 1
                continue
            else:
                self.mml_operation("ZOS:*,*,143,,,,,9786,,,1,XD00002131,,,9,1,2,3,4,5,6,7,8,9;")
                self.mml_operation("ZOS:*,*,143,,,,,9786,,,1,XD00002012,,,C,1,2,3,4,5,6,7,8,9,A,B,C;")
                self.mml_operation("ZOS:*,*,143,,,,,9786,,,1,XD00002131,,,9,1,2,3,4,5,6,7,8,9;")
                self.close_mml_session()
                break
                 
    def init_alarm_object(self):
        print "This is the init_alarm_object"        
        
    
