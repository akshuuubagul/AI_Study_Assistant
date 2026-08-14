const questions = [
// DBMS (20)
{
q: 'What does DBMS stand for?',
options: ['Database Management System', 'Data Base Main System', 'Digital Base Management', 'Data Management Software'],
answer: 'Database Management System'
},
{
q: 'Which SQL command retrieves data?',
options: ['INSERT', 'DELETE', 'SELECT', 'UPDATE'],
answer: 'SELECT'
},
{
q: 'Which normal form removes partial dependency?',
options: ['1NF', '2NF', '3NF', 'BCNF'],
answer: '2NF'
},
{
q: 'Which normal form removes transitive dependency?',
options: ['1NF', '2NF', '3NF', '4NF'],
answer: '3NF'
},
{
q: 'Primary key can contain?',
options: ['Duplicate values', 'Null values', 'Unique values only', 'Multiple nulls'],
answer: 'Unique values only'
},
{
q: 'A foreign key is used to?',
options: ['Store images', 'Create relationship between tables', 'Delete records', 'Sort records'],
answer: 'Create relationship between tables'
},
{
q: 'SQL stands for?',
options: ['Structured Query Language', 'Simple Query Language', 'Standard Question Language', 'System Query Language'],
answer: 'Structured Query Language'
},
{
q: 'Which command removes a table permanently?',
options: ['DELETE', 'DROP', 'REMOVE', 'ERASE'],
answer: 'DROP'
},
{
q: 'A tuple in DBMS is a?',
options: ['Column', 'Row', 'Table', 'Database'],
answer: 'Row'
},
{
q: 'Which key uniquely identifies a record?',
options: ['Foreign Key', 'Primary Key', 'Candidate Key', 'Composite Key'],
answer: 'Primary Key'
},
{
q: 'ER model is used for?',
options: ['Programming', 'Database design', 'Networking', 'Operating system'],
answer: 'Database design'
},
{
q: 'Which SQL clause filters rows?',
options: ['ORDER BY', 'WHERE', 'GROUP BY', 'HAVING'],
answer: 'WHERE'
},
{
q: 'Which SQL clause sorts records?',
options: ['WHERE', 'ORDER BY', 'GROUP BY', 'HAVING'],
answer: 'ORDER BY'
},
{
q: 'COUNT() is a?',
options: ['Aggregate function', 'String function', 'Date function', 'Math function'],
answer: 'Aggregate function'
},
{
q: 'A database is?',
options: ['Collection of programs', 'Collection of related data', 'Collection of networks', 'Collection of files only'],
answer: 'Collection of related data'
},
{
q: 'Which command adds a new row?',
options: ['INSERT', 'ADD', 'APPEND', 'CREATE'],
answer: 'INSERT'
},
{
q: 'Which command changes existing data?',
options: ['UPDATE', 'ALTER', 'MODIFY', 'CHANGE'],
answer: 'UPDATE'
},
{
q: 'Which command removes rows from a table?',
options: ['DELETE', 'DROP', 'REMOVE', 'CLEAR'],
answer: 'DELETE'
},
{
q: 'A candidate key can be?',
options: ['Unique identifier', 'Duplicate identifier', 'Null identifier', 'Foreign identifier'],
answer: 'Unique identifier'
},
{
q: 'DBMS provides?',
options: ['Data security', 'Data integrity', 'Data sharing', 'All of these'],
answer: 'All of these'
},

// Java (10)
{
q: 'Java is a ____ language.',
options: ['Procedural', 'Object-Oriented', 'Markup', 'Query'],
answer: 'Object-Oriented'
},
{
q: 'Which keyword creates an object?',
options: ['class', 'new', 'this', 'void'],
answer: 'new'
},
{
q: 'Which method is the entry point of a Java program?',
options: ['start()', 'main()', 'run()', 'init()'],
answer: 'main()'
},
{
q: 'Java source files use extension?',
options: ['.java', '.class', '.js', '.jar'],
answer: '.java'
},
{
q: 'Which keyword is used for inheritance?',
options: ['implements', 'extends', 'inherits', 'super'],
answer: 'extends'
},
{
q: 'Which package is imported automatically?',
options: ['java.util', 'java.lang', 'java.io', 'java.net'],
answer: 'java.lang'
},
{
q: 'Which keyword refers to current object?',
options: ['super', 'this', 'self', 'current'],
answer: 'this'
},
{
q: 'JVM stands for?',
options: ['Java Virtual Machine', 'Java Variable Method', 'Joint Virtual Machine', 'Java Verified Machine'],
answer: 'Java Virtual Machine'
},
{
q: 'Which keyword prevents inheritance?',
options: ['static', 'final', 'private', 'protected'],
answer: 'final'
},
{
q: 'Java supports?',
options: ['Single inheritance through classes', 'Multiple inheritance through classes', 'No inheritance', 'Only interface inheritance'],
answer: 'Single inheritance through classes'
},

// React (10)
{
q: 'React is mainly used for?',
options: ['Database', 'User Interface', 'Networking', 'Compiler'],
answer: 'User Interface'
},
{
q: 'Which hook manages state?',
options: ['useEffect', 'useState', 'useRef', 'useMemo'],
answer: 'useState'
},
{
q: 'JSX stands for?',
options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript Extension'],
answer: 'JavaScript XML'
},
{
q: 'Which hook handles side effects?',
options: ['useState', 'useEffect', 'useContext', 'useReducer'],
answer: 'useEffect'
},
{
q: 'React components should start with?',
options: ['Lowercase letter', 'Uppercase letter', 'Number', 'Symbol'],
answer: 'Uppercase letter'
},
{
q: 'Props are?',
options: ['Mutable', 'Read-only', 'Database records', 'Functions only'],
answer: 'Read-only'
},
{
q: 'Which company developed React?',
options: ['Google', 'Meta/Facebook', 'Microsoft', 'Amazon'],
answer: 'Meta/Facebook'
},
{
q: 'React uses a ____ DOM.',
options: ['Real', 'Virtual', 'Shadow', 'Static'],
answer: 'Virtual'
},
{
q: 'State updates are generally?',
options: ['Synchronous', 'Asynchronous', 'Manual', 'Blocked'],
answer: 'Asynchronous'
},
{
q: 'Which command creates a Vite React app?',
options: ['npm create vite@latest', 'npm install react', 'create-react-app', 'vite start'],
answer: 'npm create vite@latest'
},

// HTML/CSS/JS (10)
{
q: 'HTML stands for?',
options: ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language'],
answer: 'Hyper Text Markup Language'
},
{
q: 'Which language styles web pages?',
options: ['HTML', 'CSS', 'Java', 'Python'],
answer: 'CSS'
},
{
q: 'Which tag creates a hyperlink?',
options: ['<link>', '<a>', '<href>', '<url>'],
answer: '<a>'
},
{
q: 'Which CSS property changes text color?',
options: ['font-color', 'text-color', 'color', 'foreground'],
answer: 'color'
},
{
q: 'JavaScript is a ____ language.',
options: ['Programming', 'Markup', 'Styling', 'Query'],
answer: 'Programming'
},
{
q: 'Which symbol is used for comments in JavaScript?',
options: ['//', '<!-- -->', '#', '/* */ only'],
answer: '//'
},
{
q: 'Which method displays text in browser console?',
options: ['print()', 'console.log()', 'echo()', 'display()'],
answer: 'console.log()'
},
{
q: 'Which operator checks strict equality?',
options: ['=', '==', '===', '!='],
answer: '==='
},
{
q: 'CSS stands for?',
options: ['Cascading Style Sheets', 'Creative Style System', 'Computer Style Sheets', 'Colorful Style Sheets'],
answer: 'Cascading Style Sheets'
},
{
q: 'Which HTML tag displays the largest heading?',
options: ['<h6>', '<heading>', '<h1>', '<head>'],
answer: '<h1>'
}
];

export default questions;
