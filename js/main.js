const seats = {
    '2023-02-17': {
        '2D': {
            '09:00': {
                'tickets': 25,
                'numberSeat': {
                    '1 ряд': ['1', '2', '3', '4', '5'],
                    '2 ряд': ['1', '2', '3', '4', '5'],
                    '3 ряд': ['1', '2', '3', '4', '5'],
                    '4 ряд': ['1', '2', '3', '4', '5'],
                    '5 ряд': ['1', '2', '3', '4', '5']
                }
            },
            '12:00': {
                'tickets': 10,
                'numberSeat': {
                    '1 ряд': ['1', '5'],
                    '2 ряд': ['1', '5'],
                    '3 ряд': ['1', '5'],
                    '4 ряд': ['1', '5'],
                    '5 ряд': ['1', '5']
                }
            },
            '15:00': {
                'tickets': 5,
                'numberSeat': {
                    '1 ряд': ['1', '5'],
                    '2 ряд': ['5'],
                    '3 ряд': ['5'],
                    '4 ряд': [],
                    '5 ряд': ['1']
                }
            }    
        },
        '3D': {
            '18:00': {
                'tickets': 0,
                'numberSeat': {
                    '1 ряд': [],
                    '2 ряд': [],
                    '3 ряд': [],
                    '4 ряд': [],
                    '5 ряд': []
                }
            },
            '21:00': {
                'tickets': 10,
                'numberSeat': {
                    '1 ряд': ['1', '5'],
                    '2 ряд': ['1', '5'],
                    '3 ряд': ['1', '5'],
                    '4 ряд': ['1'],
                    '5 ряд': ['1', '4', '5']
                }
            }     
        }
    },
    '2023-02-18': {
        '2D': {
            '09:00': {
                'tickets': 25,
                'numberSeat': {
                    '1 ряд': ['1', '2', '3', '4', '5'],
                    '2 ряд': ['1', '2', '3', '4', '5'],
                    '3 ряд': ['1', '2', '3', '4', '5'],
                    '4 ряд': ['1', '2', '3', '4', '5'],
                    '5 ряд': ['1', '2', '3', '4', '5']
                }
            },
            '12:00': {
                'tickets': 15,
                'numberSeat': {
                    '1 ряд': ['1', '2', '3', '4', '5'],
                    '2 ряд': ['1', '5'],
                    '3 ряд': ['1', '5'],
                    '4 ряд': ['1', '2', '4', '5'],
                    '5 ряд': ['1', '5']
                }
            },
            '15:00': {
                'tickets': 10,
                'numberSeat': {
                    '1 ряд': ['1', '2', '4', '5'],
                    '2 ряд': ['1', '5'],
                    '3 ряд': ['1', '5'],
                    '4 ряд': ['1', '5'],
                    '5 ряд': []
                }
            }      
        },
        '3D': {
            '18:00': {
                'tickets': 5,
                'numberSeat': {
                    '1 ряд': ['1'],
                    '2 ряд': ['1'],
                    '3 ряд': ['5'],
                    '4 ряд': ['5'],
                    '5 ряд': ['1']
                }
            },
            '21:00': {
                'tickets': 10,
                'numberSeat': {
                    '1 ряд': ['1', '2', '3', '4', '5'],
                    '2 ряд': ['1', '4', '5'],
                    '3 ряд': ['1', '5'],
                    '4 ряд': [],
                    '5 ряд': []
                }
            }      
        }
    },
    '2023-02-19': {
        '2D': {
            '09:00': {
                'tickets': 25,
                'numberSeat': {
                    '1 ряд': ['1', '2', '3', '4', '5'],
                    '2 ряд': ['1', '2', '3', '4', '5'],
                    '3 ряд': ['1', '2', '3', '4', '5'],
                    '4 ряд': ['1', '2', '3', '4', '5'],
                    '5 ряд': ['1', '2', '3', '4', '5']
                }
            },
            '12:00': {
                'tickets': 20,
                'numberSeat': {
                    '1 ряд': ['1', '2', '3', '4', '5'],
                    '2 ряд': ['1', '2', '3', '4', '5'],
                    '3 ряд': ['1', '4', '5'],
                    '4 ряд': ['1', '4', '5'],
                    '5 ряд': ['1', '2', '4', '5']
                }
            },
            '15:00': {
                'tickets': 15,
                'numberSeat': {
                    '1 ряд': ['1', '2', '3', '4', '5'],
                    '2 ряд': ['1', '5'],
                    '3 ряд': ['1', '5'],
                    '4 ряд': ['1', '5'],
                    '5 ряд': ['1', '2', '4', '5']
                }
            },      
        },
        '3D': {
            '18:00': {
                'tickets': 20,
                'numberSeat': {
                    '1 ряд': ['1', '2', '3', '4', '5'],
                    '2 ряд': ['1', '2', '3', '4', '5'],
                    '3 ряд': ['1', '2', '3', '4', '5'],
                    '4 ряд': ['1', '4', '5'],
                    '5 ряд': ['1', '5']
                }
            },
            '21:00': {
                'tickets': 25,
                'numberSeat': {
                    '1 ряд': ['1', '2', '3', '4', '5'],
                    '2 ряд': ['1', '2', '3', '4', '5'],
                    '3 ряд': ['1', '2', '3', '4', '5'],
                    '4 ряд': ['1', '2', '3', '4', '5'],
                    '5 ряд': ['1', '2', '3', '4', '5']
                }
            }      
        }
    }
}

const foodAllowed = {
    '2D': false,
    '3D': true
}

function checkTimeForFormat(date, format, time) {
    return new Promise((resolve, reject) => { 
        const rightTime = seats[date][format][time];
        if(rightTime != undefined) {
            resolve(rightTime);
        } else {
            reject(`В ${time} перегляд фільму у форматі ${format} не передбачено за розкладом.`);
        }
    })
}
  
function checkTicketsAvailable(date, format, time, numTicket) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
        const seatsAvailable = seats[date][format][time].tickets;
        if(seatsAvailable >= numTicket){
            resolve(seatsAvailable);
        } else {
            reject(`Нажаль, ${date} о ${time} немає вільних місць на перегляд фільму у форматі ${format}.`);
        }
    }, 1000);
  })
}

function choicePlace(date, format, time, row, ...place) {
    return new Promise((resolve, reject) => { 
        const selectedRow = seats[date][format][time].numberSeat[row];
        const selectedPlaces = [...place]; 
        const availablePlace = selectedRow.filter(place => selectedPlaces.includes(place));
        const isEqual = JSON.stringify(availablePlace) === JSON.stringify(selectedPlaces);    
        if(isEqual) {
            const newRow = new Set(availablePlace); 
            seats[date][format][time].numberSeat[row] = selectedRow.filter(e => !newRow.has(e));
            resolve(availablePlace);
        } else {
            const notAvailablePlace = selectedPlaces.filter(function(place) {
                return availablePlace.indexOf(place) == -1;
            });
            reject(`Нажаль, але ${[...notAvailablePlace]} місце вже зарезервовано.`);
        }
    })
}

function checkFoodAllowed(format) {
    return new Promise((resolve, reject)=> {
        const availableFood = foodAllowed[format];
        if(availableFood){
          resolve('В зал можна заходити з їжею. Не забудьте купити смаколики на касі.');
        } else {
          reject('В цей зал не можна заходити з їжею.');
        }
    })
}
  
async function bookTickets(date, format, time, numTickets, row, ...place) {
  try {
    const correctTime = await checkTimeForFormat(date, format, time);
    const availableSeats = await checkTicketsAvailable(date, format, time, numTickets);
    const awailablePlace = await choicePlace(date, format, time, row, ...place);
    seats[date][format][time].tickets = availableSeats - numTickets;
    console.log(`Ви забронювали ${numTickets} квитки у ${row} на ${[...awailablePlace]} місце\nдля перегляду фільму в форматі ${format} на ${date}.\nЧас початку сеансу: ${time}.`);
    try {
        const availableFood = await checkFoodAllowed(format);
        console.log(availableFood);
    } catch (error) {
        console.error(error);
    }     
  } catch (error) {
    console.error(error);
  } 
}

bookTickets('2023-02-19', '2D', '15:00', 2, '1 ряд', '2', '3');
// bookTickets('2023-02-19', '2D', '15:00', 2, '1 ряд', '2', '3'); // Перевірка на видалення квитків на ці місця // Нажаль, але 2,3 місце вже зарезервовано.
bookTickets('2023-02-17', '3D', '21:00', 2 , '5 ряд', '4', '5');
// bookTickets('2023-02-18', '3D', '18:00', 2, '4 ряд', '4', '5'); // Нажаль, але 4 місце вже зарезервовано.
// bookTickets('2023-02-17', '3D', '18:00', 2 , '5 ряд', '2', '3'); // Нажаль, 2023-02-17 о 18:00 немає вільних місць на перегляд фільму у форматі 3D.
// bookTickets('2023-02-17', '3D', '15:00', 2 , '5 ряд', '2', '3'); // В 15:00 перегляд фільму у форматі 3D не передбачено за розкладом.