import React from 'react';

export default function About(props) {
    let style = {
        backgroundColor: props.mode === 'dark' ? '#0a2751' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black',
        outline: "none"
    }
    return (<>
        <div className="container my-3" style={style}>
            <h1>About Us</h1>
            <p>Textutils is a text utility tool that helps manipulate your text. It provides many functionalities to work you faster and this also may boost your productivity and save time. Our aim is to provide necessary tools which are required in day to day life.</p>
        </div>
        <div className="accordion container my-4" id="accordionExample">
        <h1 style={style}>Frequently Asked Questions (FAQs):</h1>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style}>
                        What is TextUtils?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils</strong> is a text analyzer and utility software that can be used to customize texts and phrases easily.You can easily enhance your productivity by using this tool.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style}>
                        What is TextUtils used for?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils</strong> can be used to convert uppercase, lowercase, copy, removing extra spaces, extracting emails from the texts or phrases given by you.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={style}>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'? '#0a2751': 'white', color:props.mode=== 'dark'?'white': 'black',outline:"none"}}>
                        Is TextUtils is free?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils</strong> is absolutely free to use. There is no any kind of hidden charges.
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
