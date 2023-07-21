import React from "react"

export default function GetInTouch() {
    const [formData, setFormData] = React.useState(
        {
            Name: "",
            Email: "",
            Phone: "",
            Comments: ""
        }
    )

    // <input
    //             type="text"
    //             placeholder="Name"
    //             onChange={handleChange}
    //             name="firstName"
    //             value={formData.firstName}
    //         />
    // onSubmit={handleSubmit}

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div className="container">
            <h2 className="text-center mb-5">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" onChange={handleChange} name="Name" value={formData.Name} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Email" onChange={handleChange} name="Email" value={formData.Email} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Phone" onChange={handleChange} name="Phone" value={formData.Phone} />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" placeholder="Message" rows="5" onChange={handleChange} name="Comments" value={formData.Comments}/>
                </div>
                <div className="text-center mt-5">

                    <button type="submit" className="btn btn-danger px-5">Submit</button>
                </div>
            </form>
        </div>
    );
}
