from sqlalchemy import create_engine

class DBoperation(object):

    db_connection_string = "string"

    def get_engine(self, db_connection_string):
        return create_engine(db_connection_string, echo = True)

    def execute_nonselect_sql(self, db_connection, sql_string):
        engine = self.get_engine(db_connection)
        engine.execute(sql_string)

    def execute_select_sql(self, db_connection, sql_string):
        engine = self.get_engine(db_connection)
        query_result = engine.execute(sql_string)
        for item in list(query_result):
            print item
        print "*" * 100
