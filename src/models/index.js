// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Platform = {
  "TIKTOK": "TIKTOK",
  "YOUTUBE": "YOUTUBE",
  "INSTAGRAM": "INSTAGRAM"
};

const { Social, Project, Video, User } = initSchema(schema);

export {
  Social,
  Project,
  Video,
  User,
  Platform
};