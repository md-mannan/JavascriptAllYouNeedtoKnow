function localStorage(){
    window.localStorage.setItem('Python', 'Guido van Rossum');
 
const student = {
    name: "Yuvraj",
    marks: 85,
    subject: "Machine Learning"
}
 
const scores = [76, 77, 34, 67, 88];
window.localStorage.setItem('result', JSON.stringify(student));
window.localStorage.setItem('marks', JSON.stringify(scores));
}