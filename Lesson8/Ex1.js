/* Task 1 — Create a class
Create:
class Website
Constructor should accept:
name
url
status
Store them using this.
Then create:
checkStatus()
If status is 200:
Website Passed
Otherwise:
Website Failed
*/
class Website{
    constructor(name, url, status ){
        this.name = name;
        this.url =url;
        this.status = status;
    }
    checkStatus(){
        if(this.status === 200){
            return "Website Passed";
        }
        else{
            return "Website Failed";
        }
    }
}

const site = new Website("google","google",200);
console.log(site.checkStatus());