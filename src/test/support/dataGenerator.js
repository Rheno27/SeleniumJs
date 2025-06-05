const { faker } = require("@faker-js/faker");

// === Bagian untuk Login ===
function generateInput(type) {
    switch (type) {
        case "valid":
        return {
            email: "admin@gmail.com",
            password: "1234567890",
        };
        case "invalid":
        return {
            email: faker.internet.email(),
            password: faker.internet.password(10),
        };
        case "empty":
        return {
            email: "",
            password: "",
        };
    }
}

function getRandomTypeWithBias() {
    const rand = Math.random();
    if (rand < 0.85) return "valid";
    else if (rand < 0.95) return "invalid";
    else return "empty";
}


function generateRandomInput() {
    const type = getRandomTypeWithBias();
    const data = generateInput(type);
    return { type, data };
}

// === Bagian untuk Data Penumpang ===
function generatePassengerData(type) {
    switch (type) {
        case "valid":
        return {
            title: faker.helpers.arrayElement(["Mr", "Mrs"]),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            birthDate: faker.date.birthdate({ min: 1950, max: 2010, mode: "year" }),
            idNumber: faker.string.numeric(16),
            passportExpiry: faker.date.future({ years: 2 }),
            seatCode: faker.helpers.arrayElement(["A1", "A2", "B1", "B2"]),
        };
        case "invalid":
        return {
            title: "",
            firstName: "1nvalidN@me!",
            lastName: "",
            birthDate: "not-a-date",
            nationality: "",
            idNumber: "123",
            passportExpiry: "13/99/9999",
            originCountry: "",
            seatCode: "",
        };
        case "empty":
        return {
            title: "",
            firstName: "",
            lastName: "",
            birthDate: "",
            nationality: "",
            idNumber: "",
            passportExpiry: "",
            originCountry: "",
            seatCode: "",
        };
        default:
        return {};
    }
}

function generateRandomPassenger() {
    const type = getRandomTypeWithBias(); // pakai fungsi yang sudah kamu buat
    const data = generatePassengerData(type);
    return { type, data };
}  

// === Formatter Tanggal ===
function formatDateMMDDYY(date) {
    if (typeof date === "string") return date;
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = String(date.getFullYear());
    return `${mm}${dd}${yy}`;
}

function formatDateMMDDYYYY(date) {
    if (typeof date === "string") return date;
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
}

// === Ekspor semua fungsi ===
module.exports = {
    generateInput,
    generateRandomInput,
    generatePassengerData,
    generateRandomPassenger,
    formatDateMMDDYY,
    formatDateMMDDYYYY,
};
