import { Fragment } from "react";

// 1. small html tags
const el1 = <div>hello</div>
const el2 = <h1>hello</h1>
// const el3 = <H1>hello</H1> // error

// 2. large letter means react component
function H1() {
    return <div>hello</div>
}
const el4 = <H1>....</H1>;
const el5 = <H1 />;

// 3. tags must be closed
// const el6 = <div>; // error
// const el7 = <img>; // error
const el8 = <div />;
const el9 = <div></div>;
const el10 = <img />;
const el11 = <img></img>;

// 4. single wrapper

// error
// const el12 = (
//     <h1>aaaa</h1>
//     <p>aaaa</p>
// );
const el13 = (<div>
    <h1>aaaa</h1>
    <p>aaaa</p>
</div>);

// Fragment (<></>) - תגית שקופה לצורך עטיפה ללא תכונות עיצוב
const el14 = (<Fragment>
    <h1>aaaa</h1>
    <p>aaaa</p>
</Fragment>);
const el15 = (<>
    <h1>aaaa</h1>
    <p>aaaa</p>
</>);

// 5. no reserve js words - JS לא ניתן להשתמש במילים שמורות של
// for -> htmlFor, class -> className
// const el16 = <div class="hello"></div> // error
const el17 = <div className="hello"></div>;

// 6. camelCase your attributes, style, events
// camelCase - כל האותיות קטנות, כל מילה חדשה מתחילה באות גדולה
const el18 = <input type="text" tabIndex={1} />
const el19 = <input type="text" style={{ backgroundColor: 'pink' }} />
const el20 = <button onClick={() => alert('hello')}>OK</button>

// 7. js in jsx inside {}
// 7.1 - tag content
// bool/null/undefined - לא מציג כלום
// number
// string
// component
// array of above

// no object/Date/function
const arr = [false, undefined, 10, 'hello', <H1 />]

const name = "user";
const el21 = (<div>
    {true}
    {10 + 20}
    {'hello'}
    {$`hello ${name}`}
    {<H1 />}
    {arr}
</div>);

// 7.2 - attribute value - type of attribute
const t = "password", obj = { backgroundColor: 'pink', color: 'red' };
function f(name) {
    alert(`hello ${name}`);
}
const el22 = <input type={t} />; // type is string

// חובה לשלוח מצביע לפונקציה ולא זימון
// אם רוצים לשלוח פרמטרים עוטפים בפונקציה אחרת
const el23 = <input type="text" style={obj} onDoubleClick={(ev) => f(ev.target.value)} />

// 8. conditions & loops - just js expression in {}
const user = "hhhhh";
const el24 = <div>

    {/* if-else */}
    {user ? <p>exists</p> : <button>login</button>}
    {user ? <p>exists</p> : null}
    
    {/* if */}
    {user && <p>exists</p>}
    {null && <p>exists</p>}

</div>