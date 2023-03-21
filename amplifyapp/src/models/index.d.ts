import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum Platform {
  TIKTOK = "TIKTOK",
  YOUTUBE = "YOUTUBE",
  INSTAGRAM = "INSTAGRAM"
}



type EagerSocial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Social, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly platform?: Platform | keyof typeof Platform | null;
  readonly accessToken?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySocial = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Social, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly platform?: Platform | keyof typeof Platform | null;
  readonly accessToken?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Social = LazyLoading extends LazyLoadingDisabled ? EagerSocial : LazySocial

export declare const Social: (new (init: ModelInit<Social>) => Social) & {
  copyOf(source: Social, mutator: (draft: MutableModel<Social>) => MutableModel<Social> | void): Social;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly Title?: string | null;
  readonly Videos?: (Video | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly Title?: string | null;
  readonly Videos: AsyncCollection<Video>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Video, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly path?: string | null;
  readonly size?: number | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Video, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly path?: string | null;
  readonly size?: number | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Video = LazyLoading extends LazyLoadingDisabled ? EagerVideo : LazyVideo

export declare const Video: (new (init: ModelInit<Video>) => Video) & {
  copyOf(source: Video, mutator: (draft: MutableModel<Video>) => MutableModel<Video> | void): Video;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly Projects?: (Project | null)[] | null;
  readonly Socials?: (Social | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly Projects: AsyncCollection<Project>;
  readonly Socials: AsyncCollection<Social>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}