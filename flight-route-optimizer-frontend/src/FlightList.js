import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlightList = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/flights'); // Adjust the URL to match your backend
                setFlights(response.data);
            } catch (error) {
                console.error('Error fetching flights:', error);
            }
        };
        fetchFlights();
    }, []);

    return (
        <div>
            <h1>Flight List</h1>
            <ul>
                {flights.map(flight => (
                    <li key={flight.id}>{flight.originAirport.name} to {flight.destinationAirport.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FlightList;
