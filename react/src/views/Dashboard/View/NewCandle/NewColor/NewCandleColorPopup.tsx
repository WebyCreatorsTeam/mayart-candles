import React from 'react'
import PopUp from '../../../UI/PopUp/PopUp'
import AddNewColor from './AddNewColor'
import DeleteColor from './DeleteColor'

const NewCandleColorPopup = ({ 
    // openPopup,
    // showAddColor,
    // setShawAddColor,
    // setDeleteColor,
    // loader,
    // handeValidColorsName,
    // handleValidColorCode,
    // handleAddColorToArrColor,
    // showDeleteColor, 
    // allColorsOfCandles, 
    // handleDeleteColorFromArray
}) => {
    return (
        <>
            {/* {openPopup && (
                <PopUp>
                    <h2>עריכת צבעים</h2>
                    <div className="aboutDash__editTitle--editWindow--btns">
                        <button
                            onClick={() => {
                                setShawAddColor(true)
                                setDeleteColor(false)
                            }}
                            className={`loginRegBtn ${loader ? "form-btn_disable" : "form-btn_active"}`}
                        >הוספת צבע חדש</button>
                        <button
                            onClick={() => {
                                setShawAddColor(false)
                                setDeleteColor(true)
                            }}
                            className={`loginRegBtn ${loader ? "form-btn_disable" : "form-btn_active"}`}
                        >מחיקת צבע</button>
                    </div>
                    {showAddColor && (<AddNewColor
                        handeValidColorsName={handeValidColorsName}
                        handleValidColorCode={handleValidColorCode}
                        loader={loader}
                        handleAddColorToArrColor={handleAddColorToArrColor}
                    />
                    )}
                    {showDeleteColor && (
                        <DeleteColor
                            allColorsOfCandles={allColorsOfCandles}
                            handleDeleteColorFromArray={handleDeleteColorFromArray}
                        />
                    )}
                    <button
                        type='button'
                        className={loader ? "action-loading" : "cancel-btn"}
                        onClick={() => setOpenPopup(false)}
                    >סגירת חלון</button>
                </PopUp>)} */}
        </>

    )
}

export default NewCandleColorPopup