import Heading from "../Heading/Heading"
import Btn from "../Btn/Btn"
import spoon from '../../assets/spoon.png'
import "./BookTable.css"

function BookTable() {
    return (
        <div className="main-booktable"  id='booking'>
            <div className="booktable-form">
                <div className="booktable-form-2">
                    <h4>Reservations</h4>
                    <img src={spoon} alt="spoon" />
                    <Heading text='Book A Table' />
                    <div className="booktable-input">
                        <div className="input">
                            <select>
                                <option>Family Hall</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>

                        <div className="input">
                            <select >
                                <option>2/12/2024</option>
                                <option>3/12/2024</option>
                                <option>4/12/2024</option>
                                <option>5/12/2024</option>
                                <option>6/12/2024</option>
                            </select>
                        </div>

                        <div className="input">
                            <select >
                                <option>7 pm</option>
                                <option>8 pm</option>
                                <option>9 pm</option>
                                <option>10 pm</option>
                                <option>11 pm</option>
                                <option>12 am</option>
                                <option>1 am</option>
                                <option>2 am</option>
                            </select>

                        </div>

                    </div>

                    <Btn text="Book Now" />
                </div>
            </div>
        </div>
    )
}

export default BookTable
