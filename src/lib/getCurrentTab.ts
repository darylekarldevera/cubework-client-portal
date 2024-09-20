import { DOCUMENTS_REGEX, HOME_REGEX, LICENSE_PROFILE_REGEX, PAYMENTS_REGEX, SERVICES_REGEX } from "@/constants/navigationRegex";

const getCurrentTab = (path: string) => {
  if (HOME_REGEX.test(path)) {
    return 'Home';
  } else if (LICENSE_PROFILE_REGEX.test(path)) {
    return 'License Profile';
  } else if (PAYMENTS_REGEX.test(path)) {
    return 'Payments';
  } else if (DOCUMENTS_REGEX.test(path)) {
    return 'Documents';
  } else if (SERVICES_REGEX.test(path)) {
    return 'Services';
  }
};

export default getCurrentTab;