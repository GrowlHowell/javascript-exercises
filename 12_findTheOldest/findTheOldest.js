const findTheOldest = function(people) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const oldestPerson = people.reduce((winner, person) => {
        if (((person.yearOfDeath || currentYear) - person.yearOfBirth) > ((winner.yearOfDeath || currentYear) - winner.yearOfBirth)) {
            return person;
        } else if (((person.yearOfDeath || currentYear) - person.yearOfBirth) <= ((winner.yearOfDeath || currentYear) - winner.yearOfBirth)) {
            return winner;
        }
    });
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
