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
  commentsCount: Scalars['Int'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  likes: Scalars['Int'];
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
  currentRegion?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  myLang: Scalars['String'];
  name: Scalars['String'];
  newLang: Scalars['String'];
  password: Scalars['String'];
};

export type ICurrentRegion = {
  __typename?: 'CurrentRegion';
  id: Scalars['String'];
  region: Scalars['String'];
  regionDetail?: Maybe<Scalars['String']>;
};

export type ICurrentRegionInput = {
  region: Scalars['String'];
  regionDetail: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  createBoardImage: Array<IBoardImage>;
  createComment: IComment;
  createCommunityBoard: ICommunityBoard;
  createCurrentRegion: ICurrentRegion;
  createReceipt: IReceipt;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  deleteBoardImage: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteCommunityBoard: Scalars['Boolean'];
  deleteCurrentRegion: Scalars['Boolean'];
  deleteFile: Scalars['String'];
  deleteReceipt: IReceipt;
  deleteUser: Scalars['Boolean'];
  emailCheck: Scalars['String'];
  likeBoard: Scalars['String'];
  likeComment: Scalars['String'];
  likeCommunityBoard: Scalars['String'];
  login: Scalars['String'];
  logout: Scalars['String'];
  restoreAccessToken: Scalars['String'];
  saveBoard: Scalars['String'];
  updateBoard: IBoard;
  updateBoardImage: Array<IBoardImage>;
  updateComment: IComment;
  updateCommunityBoard: ICommunityBoard;
  updateCurrentRegion: ICurrentRegion;
  updateUser: IUser;
  uploadFile: Array<Scalars['String']>;
  verification: Scalars['String'];
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


export type IMutationCreateCurrentRegionArgs = {
  currentRegionInput: ICurrentRegionInput;
};


export type IMutationCreateReceiptArgs = {
  impUid: Scalars['String'];
  price: Scalars['Float'];
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


export type IMutationDeleteCurrentRegionArgs = {
  currentRegionId: Scalars['String'];
};


export type IMutationDeleteFileArgs = {
  files: Scalars['String'];
};


export type IMutationDeleteReceiptArgs = {
  impUid: Scalars['String'];
  price: Scalars['Float'];
};


export type IMutationEmailCheckArgs = {
  email: Scalars['String'];
};


export type IMutationLikeBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationLikeCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationLikeCommunityBoardArgs = {
  communityBoardId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSaveBoardArgs = {
  boardId: Scalars['String'];
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


export type IMutationUpdateCurrentRegionArgs = {
  UpdateCurrentRegionInput: ICurrentRegionInput;
  currentRegionId: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  originalPassword: Scalars['String'];
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};


export type IMutationVerificationArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoard;
  fetchBoardImage: Array<IBoardImage>;
  fetchBoardImages: Array<IBoardImage>;
  fetchBoards: Array<IBoard>;
  fetchBoardsCount: Scalars['Int'];
  fetchComments: Array<IComment>;
  fetchCommunityBoard: ICommunityBoard;
  fetchCommunityBoards: Array<ICommunityBoard>;
  fetchMyBoards: Array<IBoard>;
  fetchMyCommunityBoards: Array<ICommunityBoard>;
  fetchMyReceipts: Array<IReceipt>;
  fetchReceipts: Array<IReceipt>;
  fetchSavedBoards: Array<ISave>;
  fetchUser: IUser;
  fetchUserId: IUser;
  fetchUsers: Array<IUser>;
  searchBoardContent: Array<IBoard>;
  searchCommnunityContent: Array<ICommunityBoard>;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardImageArgs = {
  board: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchBoardsCountArgs = {
  UserId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchCommentsArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchCommunityBoardArgs = {
  communityBoardId: Scalars['String'];
};


export type IQueryFetchCommunityBoardsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchSavedBoardsArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchUserIdArgs = {
  userId: Scalars['String'];
};


export type IQuerySearchBoardContentArgs = {
  content: Scalars['String'];
};


export type IQuerySearchCommnunityContentArgs = {
  content: Scalars['String'];
};

export enum IReceipt_Status_Enum {
  Cancelled = 'CANCELLED',
  Purchased = 'PURCHASED'
}

export type IReceipt = {
  __typename?: 'Receipt';
  id: Scalars['String'];
  impUid: Scalars['String'];
  point: Scalars['Int'];
  price: Scalars['Int'];
  purchasedAt: Scalars['DateTime'];
  status: IReceipt_Status_Enum;
  user: IUser;
};

export type ISave = {
  __typename?: 'Save';
  board: IBoard;
  id: Scalars['String'];
  isLiked: Scalars['Boolean'];
  isSaved: Scalars['Boolean'];
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
  currentRegion?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  myLang?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  newLang?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  boardCounts: Scalars['Int'];
  communityBoardCounts: Scalars['Int'];
  currentRegion: ICurrentRegion;
  email: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  myLang: Scalars['String'];
  name: Scalars['String'];
  newLang: Scalars['String'];
  password: Scalars['String'];
  points: Scalars['Int'];
};
