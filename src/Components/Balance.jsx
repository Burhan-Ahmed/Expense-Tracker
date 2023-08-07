import React, { useState } from "react";

export function Form_data({ Balance, setBalance }) {
    const [amount, set_amount] = useState();
    const [descrip, set_descrip] = useState();
    const [radio_type, set_type] = useState("Expense");
    const [inventory, set_inventory] = useState([]);

    const trans = () => {
        const transactionAmount = parseFloat(amount);

        const updatedBalance =
            radio_type === "Expense" ? (Balance - transactionAmount) :
                radio_type === "Income" ? (Balance + transactionAmount) :
                    Balance;
        const updatedDescription =
            radio_type === "Expense" ? `Expense:-( ${descrip} : ${updatedBalance})` :
                radio_type === "Income" ? `Income:-( ${descrip} : ${updatedBalance})` :
                    descrip;


        setBalance(updatedBalance);
        set_inventory([...inventory, updatedDescription]);
        set_amount("");
        set_descrip("");
    };
    return (
        <div className="border w-max rounded-lg border-grey">
            <form action="get" className="p-10">
                <input className="mb-2 w-72 p-2 border rounded focus:outline-none " value={amount}
                    onChange={(e) => set_amount(e.target.value)} placeholder="Amount" type="number" /> <br />
                <input className="mb-2 w-72 p-2 border rounded focus:outline-none" value={descrip}
                    onChange={(e) => set_descrip(e.target.value)} placeholder="Description" type="text" /> <br />
                <label htmlFor="Expense" className="me-5">
                    <input type="radio" name="Expense" id="Expense" className="me-1"
                        checked={radio_type === "Expense"} onClick={() => set_type("Expense")} />
                    Expense
                </label>
                <label htmlFor="Income" className="me-5">
                    <input type="radio" name="Income" id="Income" className="me-1"
                        checked={radio_type === "Income"}
                        onClick={() => set_type("Income")} />
                    Income
                </label> <br />
                <button className="p-2 mt-5 w-72 text-white rounded font-bold bg-black text-center" type="button"
                    onClick={trans} >
                    Add Transaction
                </button>
            </form>
            <div className="p-5 border">
                <p className="underline">List </p>
                <ul>
                    {inventory.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Balan() {
    const [add_btn, togglebtn] = useState(true);
    const [balance, setbalance] = useState(0);

    return (
        <>
            <div className="mt-16 mb-5 flex justify-center ">
                <div className="ms-72 text-xl ">
                    Balance : ${balance}
                </div>
                <div className="ms-52">
                    <button onClick={() => { togglebtn(!add_btn) }} className="me-72 py-1 px-3 rounded-lg font-bold bg-black text-white">
                        {add_btn ? ("ADD") : ("CANCEL")}
                    </button>

                </div>

            </div>
            <div className="flex justify-center">
                {!add_btn && <Form_data Balance={balance} setBalance={setbalance} />}
            </div>

        </>
    );
}