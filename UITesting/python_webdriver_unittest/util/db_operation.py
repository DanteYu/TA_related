from sqlalchemy import create_engine
from sqlalchemy.pool import NullPool

class DBoperation(object):

    db_connection_string = "string"

    def __init__(self, db_connection_string):
        self.connection = create_engine(db_connection_string, echo = True, poolclass=NullPool).connect()

    def close_connection(self):
        self.connection.close()

    def execute_nonselect_sql(self, sql_string):
        self.connection.execute(sql_string)

    def execute_select_sql(self,  sql_string):
        query_result = self.connection.execute(sql_string)
        for item in list(query_result):
            print item
        print "*" * 100
