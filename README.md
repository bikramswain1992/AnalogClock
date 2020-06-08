# AnalogClock
Customizable analogue clock.

# Instantiation
Use "setClock()" method to instantiate the clock. This method takes two parameter, first being the reference of the element (div, span, p, class, id, etc) which will display the clock. The second parameter is a json object and is optional. This second parameter has different properties which are also optional. The properties can have different values to manipulate the look and feel of the clock (please refer the example provided).

# Example
setClock($('.clockBody')) -- implements default clock.

setClock($('.clockBody2'),

{

backgroundColor : "#fff",
            
clockSize : 500,
            
hourHandColor : "#247524"
        
})

-- implements clock whose background color, clock size and hour hand color has been modified.

setClock($('.clockBody2'),
        
{
            
backgroundColor : "#fff",
            
clockSize : 500,
            
hourHandColor : "#247524",
            
minHandColor : '#179c84',
            
secHandColor : '#000',
            
clockCenterColor : '#ff105e',
            
clockBorder : '0 -15px 15px rgba(3,173,143,0.3),inset 0 -15px 15px rgba(34,92,81,0.3),0 15px 15px rgba(34,92,81,0.6),inset 0 15px 15px rgba(34,92,81,0.6)'
        });

-- implements clock whose all the available properties have been modified to get a highly customized look.
