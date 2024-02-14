const months = [
    "January",
    "February",
    "March",
    "April",
    'May',
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const blogDateModifier = (date) => {
    return `${months[new Date(date).getMonth()]} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`
}

export {
    blogDateModifier
}