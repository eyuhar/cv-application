import "../styles/Personal.css"

function Personal(){

    return (
        <div id="personal-form">
            <h2>Personal Details</h2>
            <div className="input-group">
                <label htmlFor="full-name">Full name</label>
                <input type="text" id="full-name" placeholder="Full name"/>
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Email"/>
            </div>
            <div className="input-group">
                <label htmlFor="phone-number">Phone number</label>
                <input type="tel" id="phone-number" placeholder="Phone number"/>
            </div>
            <div className="input-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Address"/>
            </div>
        </div>
    );
}

export default Personal;