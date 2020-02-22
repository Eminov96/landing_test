import React from 'react';
import {connect} from "react-redux";
import {currentHeaderTab} from "../../actions/actionsMainPage";


function Menu({list, listClass, tabClass, currentHeaderTab, currentTab}) {

    const handleChange = ({target}) => {
        currentHeaderTab(target.innerHTML);
    };

    console.log(currentTab);
    return (
        <ul className={listClass}>
            {list.map((value, index)=>
                <li onClick={handleChange} className={`${tabClass} ${currentTab === value && 'current-tab'}`} key={index}>{value}</li>)
            }
        </ul>
    );
}
const mapStateToProps = (store) => ({
    currentTab: store.mainPage.currentTab,
});

const mapDispatchToProps = {
    currentHeaderTab
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);