function findMatching(drivers, match) {
    return drivers.filter(driversName => driversName.toUpperCase() === match.toUpperCase());
}

function fuzzyMatch(driver, letters) {
    return driver.filter(driverName => driverName.toLowerCase().indexOf(letters.toLowerCase()) === 0);
}

function matchName(driver, name, hometown) {
    return driver.filter(driverName => name.toLowerCase() === hometown.toLowerCase());
}
