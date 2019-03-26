import React, {Component} from 'react'
import DayPicker from 'react-day-picker';

export default class DatePicker extends Component {
  render() {
    const {
      simplified,
      handleSimplified,
      handleDayChange,
      cancelFilterFromCalendar,
      day
    } = this.props;

    return (
      <div className="is-fixed-bottom-right">
        {simplified ?
          <button className="button is-medium is-rounded is-info" onClick={handleSimplified}>
            Filtrer par date
          </button>
          :
              <aside className="box">
                <p className="subtitle">Filtrer sur le calendrier</p>
                <DayPicker className={"tile"} onDayClick={handleDayChange} selectedDays={day ? day : undefined}/>
                <button className="button is-info is-outlined" onClick={cancelFilterFromCalendar}>Annuler</button>
              </aside>}
      </div>
    );
  }
}
