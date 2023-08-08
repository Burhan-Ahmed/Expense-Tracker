import React, { useState } from "react";
import { Form_data } from "./Balance";

export default function Trans() {

    return (
        <div className="mt-5 flex justify-center">
            <div className="me-4 ps-4 pe-16 py-4 border rounded text-xl">
                <span className="flex mb-3">
                    Expense
                </span>
                <span className="text-red-500">
                    $0
                </span>
            </div>
            <div className="ps-4 pe-16 py-4 border text-xl">
                <span className="flex mb-3">
                    Income
                </span>
                <span className="text-green-500">
                    $0
                </span>
            </div>
        </div>
    );
}
