import React from 'react';

export default function Footer() {
    var currentYear = new Date().getFullYear()

    return <footer className="footer">©{currentYear.toString()}</footer>;
}