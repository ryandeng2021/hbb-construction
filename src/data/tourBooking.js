// Settings for the "Schedule a Tour" form shown on ongoing project pages.
//
// Submissions go to Web3Forms, which emails them straight to you - no backend
// needed, which matters because this site is a static export on GitHub Pages.
//
// TO ACTIVATE:
//   1. Go to https://web3forms.com and enter the address that should receive
//      the enquiries. They email you an access key immediately - no account.
//   2. Paste that key below.
//
// Until a key is set the form still works, but falls back to opening the
// visitor's own mail client with the details pre-filled.
export const WEB3FORMS_ACCESS_KEY = '83d2c86e-ee33-4700-9ce7-14d876efe165';

// Where the mailto fallback sends to while no access key is configured.
export const FALLBACK_EMAIL = 'ryand@hbbconstruction.com';

export const tourBooking = {
  heading: 'Want to see it in person?',
  body:
    'This home is still under construction, which is the most informative time to walk one. ' +
    'Come see how we frame, insulate, and detail before any of it disappears behind drywall.',
  buttonLabel: 'Schedule a Tour',
  modalTitle: 'Schedule a Tour',
  modalIntro: 'Leave your details and we will get back to you within one business day to arrange a time.',
  successTitle: 'Request received',
  successBody: 'Thanks - we will be in touch within one business day to confirm a time.',
  // Shown instead of the success message when the mailto fallback is used,
  // because at that point nothing has actually reached us yet
  handoffTitle: 'One more step - please press Send',
  handoffBody:
    'We opened your email app with your request filled in. It has not reached us until you press Send there.',
  handoffNoApp: 'Email app did not open? Use one of these instead:',
};
