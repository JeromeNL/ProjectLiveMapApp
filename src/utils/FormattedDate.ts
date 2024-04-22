export const FormattedDate = (dateString: string) => {
    const optionsDate: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };
    const optionsTime: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('nl-NL', optionsDate);
    const formattedTime = date.toLocaleTimeString('nl-NL', optionsTime);
    return `${formattedDate} ${formattedTime}`;
};
