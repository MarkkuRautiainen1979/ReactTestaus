import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
const cameras = [
    { presetId: '', name: '-' },
    { presetId: 'https://fi.wikipedia.org/wiki/Luokka:Joensuun_tapahtumat', name: 'Joensuu' },
    { presetId: 'https://fi.wikipedia.org/wiki/Luokka:Kuopion_tapahtumat', name: 'Kuopio' },
    { presetId: 'https://fi.wikipedia.org/wiki/Luokka:Helsingin_tapahtumat', name: 'Helsinki' },

  
]
 
class WikiSelection extends Component {
 
    selectionChanged = (event) => {
        console.log("Selected:" + event.target.value);
        this.props.onSelect(event.target.value);
    }
 
    render = () => {
        const { selectedPresetId } = this.props;
        return <div className="Camera-selection-container">
            <div className="Camera-selection-text">
                Valitse paikka listasta:<br />
                <form>
                    <select onChange={this.selectionChanged} value={selectedPresetId}>
                        {
                            cameras.map((cam, i) =>
                                <option
                                    key={'selection_' + i}
                                    value={cam.presetId}>
                                    {cam.name}
                                </option>)
                        }
                    </select>
                </form>
            </div>
        </div>
    }
}
 
WikiSelection.propTypes = {
    selectedPresetId: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}
 
export default WikiSelection;