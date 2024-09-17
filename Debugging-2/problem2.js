function calculateGrade(score) {
    if (score >= 90) {
        console.log("Grade: A");
    } else if (score >= 80) {  // changed the operator
        console.log("Grade: B");
    } else if (score >= 70) {  // changed the operator
        console.log("Grade: C");
    } else if (score >= 60) {  // changed the operator
        console.log("Grade: D");
    } else {
        console.log("Grade: F");
    }
}

calculateGrade(85);