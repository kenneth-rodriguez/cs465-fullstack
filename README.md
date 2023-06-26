# cs465-fullstack
Ken Rodriguez

Architecture
  When creating this project, a variety of tools were utilized to ensure well-rounded and efficient development.
Javascript provides a consistent backbone for the application's development; almost every tool in the MEAN stack (utilized here)
uses JavaScript, ensuring a simple and coherent development process. One tool in this JavaScript toolbox is Express HTML.
Express HTML was utilized to route network traffic to various modules in a single page application, providing a simple way 
to map out the application's features and keep everything organized. JavaScript is also utilized in Angular, a tool used to
create the finished Single-Page Application (SPA). Angular offers developers a modular tool that's easy to expand; as the
website's needs grow, the developer can create more pages or modules to meet those needs. Express HTML can be used to easily
map out those modules as they're created, making the development process even easier to navigate.
  Regarding the backend, a NoSQL MongoDB database is utilized. MongoDB is an unstructured database tool, complimenting the
already modular nature of Angular's SPA and Express HTML. SQL databases tend to be very rigid, which can be ideal when a
development team knows exactly what they'll need to store for their application. With a growing application (such as this),
those needs might not be as well known ahead of time; an unstructured database like MongoDB can grow with the application's 
needs.

Functionality
  While JSON (JavaScript Object Notation) is related to Javascript, it differs in that it serves a way to tie an application's
frontend to its backend. While JavaScript can be used to meet a variety of developmental needs, JSON tends to retain a structure
like an array. Using key-value pairs, JSON can store data that may be created in the frontend or the backend of an application,
allowing users to interface with the database (or vice-versa), providing a significantly more interactive experience to the user.

Testing
  To test the SPA, applications like Postman and Studio3T were used to check endpoints, test security, and test modifying the
MongoDB database. Whenever information had to be fed through the frontend to modify the backend, Postman offered a vast suite
of tools to interface with a website before the user interface was even designed; a GET request could test the backend's ability
to provide data by checking endpoints, a POST or PUT request could test how well the frontend could interface and modify with 
that backend. By adding a security token to the application, developers can also test the application's security.
  Unfortunately, with security, redundancy is incredibly important and needs to be implemented as frequently as necessary (and
likely moreso) to ensure a safer application. Testing the application's security required not only testing with tools like
Postman, but physically interfacing with the website to ensure everything is authenticated properly and works as it's intended
to. For example, using Postman during this project allowed me to add or edit trip listings with next to no trouble, but the save
buttons in the project's frontend weren't checking for an authentication token and could not do anything as a result. This 
required more testing, troubleshooting, and experimentation, but ultimately provided a more secure application.

Reflection
  Upon completion of this project, I believe the most important lesson that will help me no matter what I end up doing
professionally is experimentation and problem-solving. With an application this big, there's a lot of room for chaos; it's
very likely I wasn't using the same modules or libraries that my peers were doing this same project. As such, learning how
to experiment more efficiently and find unorthodox solutions proved itself very useful for this project and will likely
translate throughout my professional career.
