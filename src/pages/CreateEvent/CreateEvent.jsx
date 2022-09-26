import { useState } from 'react';
import { usePersistentState } from '../../utils/usePersistentState';
import styles from './CreateEvent.module.scss'
import Background from '../../components/Background/Background'
import NavBar from '../../components/NavBar/NavBar';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import RoundedTextBox from '../../components/RoundedTextBox/RoundedTextBox';   

function CreateEvent() {
    const [details, setDetails] = usePersistentState("event", {});

    // event name, host name, start and end time/date, location and event photo
    const [eventNameIn, setEventName] = useState("Epic Event");
    const [hostNameIn, setHostName] = useState("John Smith");
    const [startDateIn, setStartDate] = useState(Date.now().value);
    const [endDateIn, setEndDate] = useState(Date.now().value);
    const [locationIn, setLocation] = useState("Everywhere");

    return (
        <>
        <Background />
        <NavBar />
        <form onSubmit={() => {
            setDetails({
                eventName: eventNameIn,
                hostName: hostNameIn,
                startDateIn: startDateIn,
                endDateIn: endDateIn,
                locationIn: locationIn,
            });

            window.history.pushState({}, null, "/event");
        }}>
            <label for="eventName">Event Name:</label>
            <RoundedTextBox
              name="eventName"
              type="text"
              onChange={(e) => setEventName(e.target.value)}
            />
            <label for="hostName">Host Name:</label>
            <RoundedTextBox
              name="hostName"
              type="text" 
              onChange={(e) => setHostName(e.target.value)}
            />
            <label for="startDate">Start Date:</label>
            <input
              name="startDate"
              type="datetime-local"
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label for="endDate">End Date:</label>
            <input
              name="endDate"
              type="datetime-local"
              onChange={(e) => setEndDate(e.target.value)}
            />
            <label for="location">Location:</label>
            <RoundedTextBox
              name="location"
              type="text"
              onChange={(e) => setLocation(e.target.value)}
            />
            <RoundedButton
              className={styles.submitButton}
              type="submit"
              text="🪩 Next"
            />
        </form>
        </>
    );
}

export default CreateEvent;