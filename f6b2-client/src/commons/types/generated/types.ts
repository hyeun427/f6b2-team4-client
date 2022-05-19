export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IBoard = {
  __typename?: 'Board';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  likes: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  video: Scalars['String'];
  writer: IUser;
};

export type IBoardImage = {
  __typename?: 'BoardImage';
  board: IBoard;
  id: Scalars['String'];
  image: Scalars['String'];
};

export type IComment = {
  __typename?: 'Comment';
  board: IBoard;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  image: Scalars['String'];
  likes: Scalars['Int'];
  parentComment: IComment;
  updatedAt: Scalars['DateTime'];
  video: Scalars['String'];
  writer: IUser;
};

export type ICommunityBoard = {
  __typename?: 'CommunityBoard';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  image: Scalars['String'];
  likes: Scalars['Int'];
  title: Scalars['String'];
  writer: IUser;
};

export type ICreateBoardInput = {
  content: Scalars['String'];
  video: Scalars['String'];
};

export type ICreateCommentInput = {
  content: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  parentCommentId?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
};

export type ICreateCommunityBoardInput = {
  content: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  image: Scalars['String'];
  myLang: Scalars['String'];
  name: Scalars['String'];
  newLang: Scalars['String'];
  password: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  createBoardImage: Array<IBoardImage>;
  createComment: IComment;
  createCommunityBoard: ICommunityBoard;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  deleteBoardImage: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteCommunityBoard: Scalars['Boolean'];
  deleteFile: Scalars['String'];
  deleteUser: Scalars['Boolean'];
  emailCheck: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  saveBoard: Scalars['String'];
  updateBoard: IBoard;
  updateBoardImage: Array<IBoardImage>;
  updateComment: IComment;
  updateCommunityBoard: ICommunityBoard;
  updateUser: IUser;
  uploadFile: Array<Scalars['String']>;
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateBoardImageArgs = {
  board: Scalars['String'];
  image: Array<Scalars['String']>;
};


export type IMutationCreateCommentArgs = {
  boardId: Scalars['String'];
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateCommunityBoardArgs = {
  createCommunityBoardInput: ICreateCommunityBoardInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteBoardImageArgs = {
  image: Scalars['String'];
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteCommunityBoardArgs = {
  communityBoardId: Scalars['String'];
};


export type IMutationDeleteFileArgs = {
  files: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type IMutationEmailCheckArgs = {
  email: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSaveBoardArgs = {
  boardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateBoardImageArgs = {
  board: Scalars['Float'];
  image: Array<Scalars['String']>;
};


export type IMutationUpdateCommentArgs = {
  commentId: Scalars['String'];
  updateCommentInput: IUpdateCommentInput;
};


export type IMutationUpdateCommunityBoardArgs = {
  communityBoardId: Scalars['String'];
  updateCommunityBoardInput: IUpdateCommunityBoardInput;
};


export type IMutationUpdateUserArgs = {
  originalPassword: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};

export type IQuery = {
  __typename?: 'Query';
  createBoardImage: Array<IBoardImage>;
  fetchBoard: IBoard;
  fetchBoardImage: Array<IBoardImage>;
  fetchBoardImages: Array<IBoardImage>;
  fetchBoards: Array<IBoard>;
  fetchComments: Array<IComment>;
  fetchCommunityBoard: ICommunityBoard;
  fetchCommunityBoards: Array<ICommunityBoard>;
  fetchSavedBoards: Array<ISave>;
  fetchUser: IUser;
  fetchUsers: Array<IUser>;
};


export type IQueryCreateBoardImageArgs = {
  board: Scalars['String'];
  image: Array<Scalars['String']>;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardImageArgs = {
  board: Scalars['String'];
};


export type IQueryFetchCommentsArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchCommunityBoardArgs = {
  communityBoardId: Scalars['String'];
};


export type IQueryFetchSavedBoardsArgs = {
  userId: Scalars['String'];
};

export type ISave = {
  __typename?: 'Save';
  board: IBoard;
  id: Scalars['String'];
  user: IUser;
};

export type IUpdateBoardInput = {
  content?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
};

export type IUpdateCommentInput = {
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  parentCommentId?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['String']>;
};

export type IUpdateCommunityBoardInput = {
  content?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  myLang?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  newLang?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  myLang: Scalars['String'];
  name: Scalars['String'];
  newLang: Scalars['String'];
  password: Scalars['String'];
};
