// import * as common from './common'
function decode(base64string) {
    return decodeURIComponent(atob(base64string).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

const i = "eyJyZXF1ZXN0aWQiOiIzMzQzMyIsInVzZXJJZCI6IjE0MTEiLCJ3b3JrQ29kZSI6Ik9BdGVhbSIsImdyb3VwSWQiOiIzOCIsImRpdmlzaW9uTmFtZSI6In5gfmA3IOS6uuS6i+WkhGB+YDggSFIgRGl2aXNpb25gfmB+IiwiYmVsb25nRGVwYXJ0bWVudCI6IjcxOSIsInVzZXJuYW1lIjoiT0F0ZWFtIiwiZW1haWwiOiJvYXRlYW1AY3RmaXJzdC5uZXQifQ==";
const afterdecode = JSON.parse(decode(i));
document.getElementById("department").value = afterdecode['belongDepartment'];
document.getElementById("workno").value = afterdecode['workCode'];
document.getElementById("group").value = afterdecode['groupId'];
document.getElementById("divison").value = afterdecode['divisionName'];
document.getElementById("applicant").value = afterdecode['username'];
document.getElementById("requestid").value = afterdecode['requestid'];

// const afterdecode = decode(i);
