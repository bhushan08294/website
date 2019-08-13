from flask import Flask
from flask import request
from flask_mysqldb import MySQL
mysql = MySQL()
app = Flask(__name__)
# My SQL Instance configurations 
# Change the HOST IP and Password to match your instance configurations
app.config['MYSQL_USER'] = 'web'
app.config['MYSQL_PASSWORD'] = 'webPass'
app.config['MYSQL_DB'] = 'whiteboard'
app.config['MYSQL_HOST'] = 'whiteboard@localhost'
mysql.init_app(app)

@app.route("/addUser") #Add User
def add():
    name = request.args.get('name')
    email = request.args.get('email')
    cur = mysql.connection.cursor() #create a connection to the SQL instance
    #Compose an INSERT statement:
    s='''INSERT INTO current_students(current_students_name, current_students_email) VALUES('{}','{}');'''.format(name,email)
    cur.execute(s)
    mysql.connection.commit()
    return '{"Result":"success"}'
@app.route("/verify") #Default - Show Data
def hello(): # Name of the method
    username = request.args.get('username')

    cur = mysql.connection.cursor() #create a connection to the SQL instance
    cur.execute('''SELECT * FROM users WHERE email_id=username;''') # execute an SQL statment
    rv = cur.fetchall() #Retreive all rows returend by the SQL statment
    ret = '{"Results":[' #Create return string
    first=True
    for row in rv: #Format the Output Results and add to return string
        if not first:
            ret=ret+','
        else:
            first=False
        ret=ret+'{"Name": "'+row[0]+'", "Email": "'+row[1]+'", "ID": '+str(row[2])+'}'
    ret=ret+']}'
    return ret      #Return the data in a string formatif __name__ == "__main__":
        app.run(host='0.0.0.0', port='8080') #Run the flask app at port 8080

