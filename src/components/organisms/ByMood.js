import React from 'react';
import SelectMood from "../atoms/SelectMood";
import {faBrain} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ByMood = ({movies}) => {
    const newCheer = [...movies]
    const cheer = newCheer.filter(el => {
        return el.genre_ids.includes(35 || 16 || 10751);
    });
    const newCry = [...movies]
    const cry = newCry.filter(el => {
        return el.genre_ids.includes(18 || 10749);
    });
    const newThink = [...movies]
    const think = newThink.filter(el => {
        return el.genre_ids.includes(9648 || 99 || 36 || 10752);
    });
    const newChill = [...movies]
    const chill = newChill.filter(el => {
        return el.genre_ids.includes(10402 || 16 || 10751 || 10749 || 35);
    });
    const newThrill = [...movies]
    const thrill = newThrill.filter(el => {
        return el.genre_ids.includes(28 || 80 || 9648 || 878 || 27 || 53 || 37 || 12);
    });
    const newScare = [...movies]
    const scare = newScare.filter(el => {
        return el.genre_ids.includes(53 || 27 || 80 || 9648);
    });

    return (
        <section className="genre">
            <div className="genre__container">
                <div className="genre__title">
                    <FontAwesomeIcon icon={faBrain}/>
                    <h2>MOVIES BY MOOD</h2>
                </div>
                <div className="genre__list">
                    <ul>
                        <SelectMood mood={cheer} text={"TO CHEER UP"}/>
                        <SelectMood mood={chill} text={"TO CHILL"}/>
                        <SelectMood mood={cry} text={"TO CRY"}/>
                        <SelectMood mood={scare} text={"TO SCARE"}/>
                        <SelectMood mood={think} text={"TO THINK"}/>
                        <SelectMood mood={thrill} text={"TO THRILL"}/>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ByMood;