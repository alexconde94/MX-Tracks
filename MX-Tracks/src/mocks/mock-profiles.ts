import { Profile } from "src/models/profile";
import { PHILLY_LOCATION } from './mock-locations';

export const MOCK_PROFILE: Profile = {
    firstName: 'Jasper',
    lastName: 'Snowolf',
    userId: 1,
    userType: 'ADMIN',
    location: PHILLY_LOCATION
}
