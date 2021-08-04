import PModal from './PModal';
import { PFormLayout } from '../PFormLayout';
import { PTextField } from '../PTextField';
import { PBanner } from '../PBanner';
import { PButton } from '../PButton';
import { Action } from '../../types';

export default {
    title: 'Overlays / Modal',
    component: PModal,
    argTypes: {
        primaryAction: {
            table: {
                defaultValue: {
                    summary: '{}',
                    detail:`{
    /** A unique identifier for the action */
    id?: string;
    /** Content the action displays */
    content?: string;
    /** Visually hidden text for screen readers */
    accessibilityLabel?: string;
    /** A destination to link to, rendered in the action */
    url?: string;
    /** Forces url to open in a new tab */
    external?: boolean;
    /** Callback when an action takes place */
    onAction?(): void;
    /** Callback when mouse enter */
    onMouseEnter?(): void;
    /** Callback when element is touched */
    onTouchStart?(): void;
}`,
                },
            },
        },
    },
}

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {
        PModal, PFormLayout, PTextField, PBanner, PButton,
    },
    data() {
        return {
            is_active: false,
        };
    },
    template: `
      <div>
        <PModal v-bind="$props"
                @close="closeModal"
                :open="this.is_active"
        >
          <PFormLayout>
            <PTextField label="First Name"/>
            <PTextField label="Last Name Name"/>
            <PTextField label="Email" type="email"/>
            <PBanner status="critical" title="Notice" :action="{}">
              We ensure complete privacy all of out customers
            </PBanner>
          </PFormLayout>
        </PModal>
        <PButton @click="openModal">Open Modal</PButton>
      </div>`,
    methods: {
        openModal() {
            this.is_active = true;
        },
        closeModal() {
            this.is_active = false;
        },
    },
});

export const Modal = Template.bind({});

Modal.args = {
    primaryAction: {
        content: 'Save Customer',
        onAction: () => {
            alert('Customer saved');
        },
    },
    secondaryActions: [
        {
            content: 'Delete Customer',
            destructive: true,
            onAction: () => {
                alert('Customer deleted');
            },
        },
        {
            content: 'Cancel',
            onAction: () => {
                this.is_active = false;
            },
        },
    ],
    title: "Enter Customer Details",
    sectioned: true,
}
