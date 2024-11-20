# Chakra vs MUI

This is a simple project to test out how building different components works in
both of these UI libraries.

| Component                         | Chakra | MUI  |
|-----------------------------------|--------|------|
| Login form                        |   ✅   |  ✅  |
| Register form                     |   ✅   |  ✅  |
| Expense input form                |   ✅   |  ✅  |
| Confirmation modal                |   ✅   |  ✅  |
| Success toast                     |   ✅   |  ✅  |
| Responsive navbar                 |   ✅   |  ✅  |
| Table with sorting and pagination |   ✅   |  ✅  |


# Comparison

## Chakra

### Initial Setup
This was kinda weird tbh. When installing and learning about Chakra I just googled it. I would later learn that I was using Chakra 3 which was released just a few days ago. And to say the new release was half baked would be putting it mildly.

### Usage
After the initial setup I found that using the component library was quite pleasant. There were some components I wish it had but overall it is very usable. I really like how they handle toast with a custom hook. This makes using them a breeze since I don't have to wonder where it makes sense to put a component that inherently breaks out of the element hierarchy.

## MUI

### Initial Setup
The initial setup was a breeze. I just followed the docs and it worked.

### Usage
Using MUI was also quite pleasant. The documentation is great adn you can see that it is a much more mature project than chakra. Basically all of the components I wanted to make as a test were already implemented or there was an example of how to connect the right components to make it work.

This maturity is also a downside of MUI since it gives you plenty of choices. There isn't just a MUI library there is Material UI, Base UI, Joy UI, MUI System and even third party more complex components. If you're anything like me you'll probably be paralyzed by the choices and not know which one to use. In this regard I appreciate Chakra's simplicity.


## Conclusion
If I were to choose between these two component libraries I would probably go with MUI. While it is scary in the beginning it has basically everything I could think of, so it made development extremely easy and fast. I did not spend much time trying to change the styles or to make a custom theme so I don't have much to say here. Maybe that is something I should look into in the future.

P. S. I'm really wanting to try Shadcn/UI after seeing people talk about it on X and will probably do so in this project.