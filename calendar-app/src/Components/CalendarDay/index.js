import { format, isEqual } from 'date-fns';
import './style.css'

function CalendarDay({ day, days }) {
    const today = new Date().setHours(0,0,0,0);

    return (
        <tr key={day}>
            {days.map((d, i) => (
                <td key={i} className={ i===6 || i===0 ? "weekend" : isEqual(d, today) ? 'today weekdays': "weekdays"}>
                    <div className={`calendar-cell`}>
                        {format(d, 'd')}
                    </div>
                </td>
            )
            )}
        </tr>
    );
}

export default CalendarDay;
