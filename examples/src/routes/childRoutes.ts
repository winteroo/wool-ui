import { ButtonDemo } from '../components/button';
import { InputDemo } from '../components/input';
import { RadioDemo } from '../components/radio';
import { CheckboxDemo } from '../components/checkbox';
import { GridDemo } from '../components/grid';
import { SelectDemo } from '../components/select';
import { TransferDemo } from '../components/transfer';
import { DatePickerDemo } from '../components/datepicker';
import { SwitchDemo } from '../components/switch';
import { MenuDemo } from '../components/menu';
import { TableDemo } from '../components/table';
import { TooltipDemo } from '../components/tooltip';
import { MessageDemo } from '../components/message';

export const childRoutes: Array<any> = [
    {
        'path': '/component/button',
        'component': ButtonDemo
    }, {
        'path': '/component/input',
        'component': InputDemo
    },
    {
        'path': '/component/radio',
        'component': RadioDemo
    },
    {
        'path': '/component/checkbox',
        'component': CheckboxDemo
    },
    {
        'path': '/component/grid',
        'component': GridDemo
    },
    {
        'path': '/component/select',
        'component': SelectDemo
    },
    {
        'path': '/component/transfer',
        'component': TransferDemo
    },
    {
        'path': '/component/datePicker',
        'component': DatePickerDemo
    },
    {
        'path': '/component/switch',
        'component': SwitchDemo
    },
    {
        'path': '/component/menu',
        'component': MenuDemo
    },
    {
        'path': '/component/table',
        'component': TableDemo
    },
    {
        'path': '/component/tooltip',
        'component': TooltipDemo
    },
    {
        'path': '/component/message',
        'component': MessageDemo
    }

];