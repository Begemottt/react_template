// // WORKING example of the get_fake_members thing!!
// const get_fake_members = count => new Promise((resolves, rejects) => {
//     const api = `https://api.randomuser.me/?nat=US&results=${count}`
//     const request = new XMLHttpRequest()
//     request.open('GET', api)
//     request.onload = () =>
//         (request.status === 200) ?
//             resolves(JSON.parse(request.response).results) : 
//             reject(Error(request.statusText))
//     request.onerror = (err) => rejects(err)
//     request.send()
// })

// const user_logs = user_name => message => 
//     console.log(`${user_name} -> ${message}`)

// const log = user_logs("Begemottt")

// log("Attempting to load 20 fake members.")
// get_fake_members(20).then(
//     members => log(`Successfully loaded ${members.length} members!`),
//     error => log("Ran into an error trying to load members")
// )


// Recursion example
// const countdown = (value, fn, delay=1000) => {
//     fn(value);
//     return (value > 0) ?
//         setTimeout(() => countdown(value-1, fn), delay) : 
//         value
// }
// countdown(10, value => console.log(value) );


// The Big Clock Example of functional programming!!
// First, define some simple functions that give basic functionality, with descriptive names
const one_second = () => 1000;
const get_current_time = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);
// This function dates the Date and converts it into an object that can be manipulated more easily
const serialize_clock_time = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})
// This one takes the hours and converts to civilian format
const civilian_hours = clock_time => ({
    ...clock_time,
    hours: (clock_time.hours > 12) ? 
        clock_time.hours - 12 :
        clock_time.hours
})
// This adds AM or PM to the end, based on the time in military time
const append_ampm = clock_time => ({
    ...clock_time,
    ampm: (clock_time > 12) ? "PM" : "AM"
})
// I don't know what the fuck this is for!!!!
const display = target => time => target(time);
// This adds the time to the clock using a provided format
const format_clock = format => 
    time =>
        format.replace("hh", time.hours)
            .replace("mm", time.minutes)
            .replace("ss", time.seconds)
            .replace("tt", time.ampm);
// This adds 0 to values below 10, so that things look consistent and clean
const prepend_zero = key => clock_time => ({
    ...clock_time,
    [key]: (clock_time[key] < 10) ?
        "0" + clock_time[key] :
        clock_time[key]
})
// The Compose Function!! This is the one that brings things together.
// You pass in an array of functions, and it runs them in sequence, taking the result of the first and passing it on to the second
const compose = (...fns) =>
    arg =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        )
// This brings together some of the functions to translate the date into civilian time
const convert_to_civilian_time = clock_time => 
    compose(
        append_ampm,
        civilian_hours
    )(clock_time)
// This one makes sure that each element of clock_time is double-digits
const double_digits = civilian_time =>
    compose(
        prepend_zero("hours"),
        prepend_zero("minutes"),
        prepend_zero("seconds")
    )(civilian_time)
// This is the final function that brings everything together!!
const start_ticking = () =>
    setInterval(
        compose(
            clear,
            get_current_time,
            serialize_clock_time,
            convert_to_civilian_time,
            double_digits,
            format_clock("hh:mm:ss tt"),
            display(log)
        ),
        one_second()
    )
// And finally, you simply call the function.
start_ticking();