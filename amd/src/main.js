import {getTicket} from "./repository";

export const main = async(repoUrl) => {
    const buttons = document.querySelectorAll('.edu-workspace-button');
    const courseId = document.getElementById('eduCourseId').value;
    buttons.forEach(button => {
        button.addEventListener('click', async(event) => {
            event.preventDefault();
            const ajaxParams = {
                eduTicketStructure: {
                    courseId: courseId
                }
            };
            const ticket = await getTicket(ajaxParams).catch(error => {
                window.console.error(error);
                return '';
            });
            const target = button.id;
            const targetUrl = repoUrl + '/components/' + target + '?ticket=' + ticket.ticket;
            window.open(targetUrl, '_blank');
        });
    });
};
