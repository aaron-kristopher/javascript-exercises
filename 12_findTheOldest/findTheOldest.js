const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);        
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);        

        return (oldestAge < currentAge) ? current : oldest;
    });
};

const getAge = function(born, died) {
    died = died ?? new Date().getFullYear();
    return died - born; 
}

// Do not edit below this line
module.exports = findTheOldest;
