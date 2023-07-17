import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Auth: Stores user login data within a secure schema. */
export type Auth_Users = {
  __typename?: 'auth_users';
  aud?: Maybe<Scalars['String']['output']>;
  banned_until?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_token?: Maybe<Scalars['String']['output']>;
  confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_change?: Maybe<Scalars['String']['output']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  email_change_token_current?: Maybe<Scalars['String']['output']>;
  email_change_token_new?: Maybe<Scalars['String']['output']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  encrypted_password?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  instance_id?: Maybe<Scalars['uuid']['output']>;
  invited_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user: Scalars['Boolean']['output'];
  is_super_admin?: Maybe<Scalars['Boolean']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_change?: Maybe<Scalars['String']['output']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  phone_change_token?: Maybe<Scalars['String']['output']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  raw_app_meta_data?: Maybe<Scalars['jsonb']['output']>;
  raw_user_meta_data?: Maybe<Scalars['jsonb']['output']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_token?: Maybe<Scalars['String']['output']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  recovery_token?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userRole?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};


/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_App_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_User_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Append_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  _not?: InputMaybe<Auth_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  aud?: InputMaybe<String_Comparison_Exp>;
  banned_until?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_token?: InputMaybe<String_Comparison_Exp>;
  confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_change?: InputMaybe<String_Comparison_Exp>;
  email_change_confirm_status?: InputMaybe<Smallint_Comparison_Exp>;
  email_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email_change_token_current?: InputMaybe<String_Comparison_Exp>;
  email_change_token_new?: InputMaybe<String_Comparison_Exp>;
  email_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encrypted_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instance_id?: InputMaybe<Uuid_Comparison_Exp>;
  invited_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  is_sso_user?: InputMaybe<Boolean_Comparison_Exp>;
  is_super_admin?: InputMaybe<Boolean_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  phone_change?: InputMaybe<String_Comparison_Exp>;
  phone_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone_change_token?: InputMaybe<String_Comparison_Exp>;
  phone_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  points?: InputMaybe<Int_Comparison_Exp>;
  raw_app_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  raw_user_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  reauthentication_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  reauthentication_token?: InputMaybe<String_Comparison_Exp>;
  recovery_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  recovery_token?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userRole?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint on columns "confirmation_token" */
  ConfirmationTokenIdx = 'confirmation_token_idx',
  /** unique or primary key constraint on columns "email_change_token_current" */
  EmailChangeTokenCurrentIdx = 'email_change_token_current_idx',
  /** unique or primary key constraint on columns "email_change_token_new" */
  EmailChangeTokenNewIdx = 'email_change_token_new_idx',
  /** unique or primary key constraint on columns "reauthentication_token" */
  ReauthenticationTokenIdx = 'reauthentication_token_idx',
  /** unique or primary key constraint on columns "recovery_token" */
  RecoveryTokenIdx = 'recovery_token_idx',
  /** unique or primary key constraint on columns "email" */
  UsersEmailPartialKey = 'users_email_partial_key',
  /** unique or primary key constraint on columns "phone" */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Users_Delete_At_Path_Input = {
  raw_app_meta_data?: InputMaybe<Array<Scalars['String']['input']>>;
  raw_user_meta_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Users_Delete_Elem_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['Int']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Users_Delete_Key_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['String']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  aud?: InputMaybe<Scalars['String']['input']>;
  banned_until?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_change?: InputMaybe<Scalars['String']['input']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email_change_token_current?: InputMaybe<Scalars['String']['input']>;
  email_change_token_new?: InputMaybe<Scalars['String']['input']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encrypted_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  invited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_change?: InputMaybe<Scalars['String']['input']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone_change_token?: InputMaybe<Scalars['String']['input']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  reauthentication_token?: InputMaybe<Scalars['String']['input']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  recovery_token?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userRole?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  aud?: Maybe<Scalars['String']['output']>;
  banned_until?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_token?: Maybe<Scalars['String']['output']>;
  confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_change?: Maybe<Scalars['String']['output']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  email_change_token_current?: Maybe<Scalars['String']['output']>;
  email_change_token_new?: Maybe<Scalars['String']['output']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  encrypted_password?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instance_id?: Maybe<Scalars['uuid']['output']>;
  invited_at?: Maybe<Scalars['timestamptz']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_change?: Maybe<Scalars['String']['output']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  phone_change_token?: Maybe<Scalars['String']['output']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_token?: Maybe<Scalars['String']['output']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  recovery_token?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userRole?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  aud?: Maybe<Scalars['String']['output']>;
  banned_until?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_token?: Maybe<Scalars['String']['output']>;
  confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_change?: Maybe<Scalars['String']['output']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  email_change_token_current?: Maybe<Scalars['String']['output']>;
  email_change_token_new?: Maybe<Scalars['String']['output']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  encrypted_password?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instance_id?: Maybe<Scalars['uuid']['output']>;
  invited_at?: Maybe<Scalars['timestamptz']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_change?: Maybe<Scalars['String']['output']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  phone_change_token?: Maybe<Scalars['String']['output']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_token?: Maybe<Scalars['String']['output']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  recovery_token?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userRole?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Auth_Users_Obj_Rel_Insert_Input = {
  data: Auth_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  aud?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmation_token?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_change?: InputMaybe<Order_By>;
  email_change_confirm_status?: InputMaybe<Order_By>;
  email_change_sent_at?: InputMaybe<Order_By>;
  email_change_token_current?: InputMaybe<Order_By>;
  email_change_token_new?: InputMaybe<Order_By>;
  email_confirmed_at?: InputMaybe<Order_By>;
  encrypted_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance_id?: InputMaybe<Order_By>;
  invited_at?: InputMaybe<Order_By>;
  is_sso_user?: InputMaybe<Order_By>;
  is_super_admin?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone_change?: InputMaybe<Order_By>;
  phone_change_sent_at?: InputMaybe<Order_By>;
  phone_change_token?: InputMaybe<Order_By>;
  phone_confirmed_at?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  raw_app_meta_data?: InputMaybe<Order_By>;
  raw_user_meta_data?: InputMaybe<Order_By>;
  reauthentication_sent_at?: InputMaybe<Order_By>;
  reauthentication_token?: InputMaybe<Order_By>;
  recovery_sent_at?: InputMaybe<Order_By>;
  recovery_token?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userRole?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Prepend_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsSsoUser = 'is_sso_user',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  Points = 'points',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  ReauthenticationSentAt = 'reauthentication_sent_at',
  /** column name */
  ReauthenticationToken = 'reauthentication_token',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserRole = 'userRole',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  aud?: InputMaybe<Scalars['String']['input']>;
  banned_until?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_change?: InputMaybe<Scalars['String']['input']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email_change_token_current?: InputMaybe<Scalars['String']['input']>;
  email_change_token_new?: InputMaybe<Scalars['String']['input']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encrypted_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  invited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_change?: InputMaybe<Scalars['String']['input']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone_change_token?: InputMaybe<Scalars['String']['input']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  reauthentication_token?: InputMaybe<Scalars['String']['input']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  recovery_token?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userRole?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "auth_users" */
export type Auth_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Users_Stream_Cursor_Value_Input = {
  aud?: InputMaybe<Scalars['String']['input']>;
  banned_until?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_token?: InputMaybe<Scalars['String']['input']>;
  confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_change?: InputMaybe<Scalars['String']['input']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email_change_token_current?: InputMaybe<Scalars['String']['input']>;
  email_change_token_new?: InputMaybe<Scalars['String']['input']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encrypted_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  invited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_change?: InputMaybe<Scalars['String']['input']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone_change_token?: InputMaybe<Scalars['String']['input']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  reauthentication_token?: InputMaybe<Scalars['String']['input']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  recovery_token?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userRole?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsSsoUser = 'is_sso_user',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  Points = 'points',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  ReauthenticationSentAt = 'reauthentication_sent_at',
  /** column name */
  ReauthenticationToken = 'reauthentication_token',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserRole = 'userRole',
  /** column name */
  Username = 'username'
}

export type Auth_Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Auth_Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "notifications" */
  delete_notifications?: Maybe<Notifications_Mutation_Response>;
  /** delete single row from the table: "notifications" */
  delete_notifications_by_pk?: Maybe<Notifications>;
  /** delete data from the table: "rewards" */
  delete_rewards?: Maybe<Rewards_Mutation_Response>;
  /** delete single row from the table: "rewards" */
  delete_rewards_by_pk?: Maybe<Rewards>;
  /** delete data from the table: "userRewards" */
  delete_userRewards?: Maybe<UserRewards_Mutation_Response>;
  /** delete single row from the table: "userRewards" */
  delete_userRewards_by_pk?: Maybe<UserRewards>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "notifications" */
  insert_notifications?: Maybe<Notifications_Mutation_Response>;
  /** insert a single row into the table: "notifications" */
  insert_notifications_one?: Maybe<Notifications>;
  /** insert data into the table: "rewards" */
  insert_rewards?: Maybe<Rewards_Mutation_Response>;
  /** insert a single row into the table: "rewards" */
  insert_rewards_one?: Maybe<Rewards>;
  /** insert data into the table: "userRewards" */
  insert_userRewards?: Maybe<UserRewards_Mutation_Response>;
  /** insert a single row into the table: "userRewards" */
  insert_userRewards_one?: Maybe<UserRewards>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update multiples rows of table: "auth.users" */
  update_auth_users_many?: Maybe<Array<Maybe<Auth_Users_Mutation_Response>>>;
  /** update data of the table: "notifications" */
  update_notifications?: Maybe<Notifications_Mutation_Response>;
  /** update single row of the table: "notifications" */
  update_notifications_by_pk?: Maybe<Notifications>;
  /** update multiples rows of table: "notifications" */
  update_notifications_many?: Maybe<Array<Maybe<Notifications_Mutation_Response>>>;
  /** update data of the table: "rewards" */
  update_rewards?: Maybe<Rewards_Mutation_Response>;
  /** update single row of the table: "rewards" */
  update_rewards_by_pk?: Maybe<Rewards>;
  /** update multiples rows of table: "rewards" */
  update_rewards_many?: Maybe<Array<Maybe<Rewards_Mutation_Response>>>;
  /** update data of the table: "userRewards" */
  update_userRewards?: Maybe<UserRewards_Mutation_Response>;
  /** update single row of the table: "userRewards" */
  update_userRewards_by_pk?: Maybe<UserRewards>;
  /** update multiples rows of table: "userRewards" */
  update_userRewards_many?: Maybe<Array<Maybe<UserRewards_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NotificationsArgs = {
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Notifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RewardsArgs = {
  where: Rewards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rewards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserRewardsArgs = {
  where: UserRewards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UserRewards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NotificationsArgs = {
  objects: Array<Notifications_Insert_Input>;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Notifications_OneArgs = {
  object: Notifications_Insert_Input;
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RewardsArgs = {
  objects: Array<Rewards_Insert_Input>;
  on_conflict?: InputMaybe<Rewards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rewards_OneArgs = {
  object: Rewards_Insert_Input;
  on_conflict?: InputMaybe<Rewards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserRewardsArgs = {
  objects: Array<UserRewards_Insert_Input>;
  on_conflict?: InputMaybe<UserRewards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserRewards_OneArgs = {
  object: UserRewards_Insert_Input;
  on_conflict?: InputMaybe<UserRewards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_ManyArgs = {
  updates: Array<Auth_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NotificationsArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  where: Notifications_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_By_PkArgs = {
  _set?: InputMaybe<Notifications_Set_Input>;
  pk_columns: Notifications_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Notifications_ManyArgs = {
  updates: Array<Notifications_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RewardsArgs = {
  _inc?: InputMaybe<Rewards_Inc_Input>;
  _set?: InputMaybe<Rewards_Set_Input>;
  where: Rewards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rewards_By_PkArgs = {
  _inc?: InputMaybe<Rewards_Inc_Input>;
  _set?: InputMaybe<Rewards_Set_Input>;
  pk_columns: Rewards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rewards_ManyArgs = {
  updates: Array<Rewards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserRewardsArgs = {
  _inc?: InputMaybe<UserRewards_Inc_Input>;
  _set?: InputMaybe<UserRewards_Set_Input>;
  where: UserRewards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UserRewards_By_PkArgs = {
  _inc?: InputMaybe<UserRewards_Inc_Input>;
  _set?: InputMaybe<UserRewards_Set_Input>;
  pk_columns: UserRewards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserRewards_ManyArgs = {
  updates: Array<UserRewards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** columns and relationships of "notifications" */
export type Notifications = {
  __typename?: 'notifications';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  isRead?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "notifications" */
export type Notifications_Aggregate = {
  __typename?: 'notifications_aggregate';
  aggregate?: Maybe<Notifications_Aggregate_Fields>;
  nodes: Array<Notifications>;
};

export type Notifications_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Notifications_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Notifications_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Notifications_Aggregate_Bool_Exp_Count>;
};

export type Notifications_Aggregate_Bool_Exp_Bool_And = {
  arguments: Notifications_Select_Column_Notifications_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notifications_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Notifications_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Notifications_Select_Column_Notifications_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notifications_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Notifications_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Notifications_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "notifications" */
export type Notifications_Aggregate_Fields = {
  __typename?: 'notifications_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Notifications_Max_Fields>;
  min?: Maybe<Notifications_Min_Fields>;
};


/** aggregate fields of "notifications" */
export type Notifications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notifications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "notifications" */
export type Notifications_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Notifications_Max_Order_By>;
  min?: InputMaybe<Notifications_Min_Order_By>;
};

/** input type for inserting array relation for remote table "notifications" */
export type Notifications_Arr_Rel_Insert_Input = {
  data: Array<Notifications_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Notifications_On_Conflict>;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: InputMaybe<Array<Notifications_Bool_Exp>>;
  _not?: InputMaybe<Notifications_Bool_Exp>;
  _or?: InputMaybe<Array<Notifications_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isRead?: InputMaybe<Boolean_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "notifications" */
export enum Notifications_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotificationsPkey = 'notifications_pkey'
}

/** input type for inserting data into table "notifications" */
export type Notifications_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Notifications_Max_Fields = {
  __typename?: 'notifications_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "notifications" */
export type Notifications_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Notifications_Min_Fields = {
  __typename?: 'notifications_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "notifications" */
export type Notifications_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "notifications" */
export type Notifications_Mutation_Response = {
  __typename?: 'notifications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Notifications>;
};

/** on_conflict condition type for table "notifications" */
export type Notifications_On_Conflict = {
  constraint: Notifications_Constraint;
  update_columns?: Array<Notifications_Update_Column>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};

/** Ordering options when selecting data from "notifications". */
export type Notifications_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isRead?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notifications */
export type Notifications_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "notifications" */
export enum Notifications_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsRead = 'isRead',
  /** column name */
  Message = 'message',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** select "notifications_aggregate_bool_exp_bool_and_arguments_columns" columns of table "notifications" */
export enum Notifications_Select_Column_Notifications_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsRead = 'isRead'
}

/** select "notifications_aggregate_bool_exp_bool_or_arguments_columns" columns of table "notifications" */
export enum Notifications_Select_Column_Notifications_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsRead = 'isRead'
}

/** input type for updating data in table "notifications" */
export type Notifications_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "notifications" */
export type Notifications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notifications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notifications_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "notifications" */
export enum Notifications_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsRead = 'isRead',
  /** column name */
  Message = 'message',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type Notifications_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notifications_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notifications_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table: "rewards" */
  rewards: Array<Rewards>;
  /** fetch aggregated fields from the table: "rewards" */
  rewards_aggregate: Rewards_Aggregate;
  /** fetch data from the table: "rewards" using primary key columns */
  rewards_by_pk?: Maybe<Rewards>;
  /** An array relationship */
  userRewards: Array<UserRewards>;
  /** An aggregate relationship */
  userRewards_aggregate: UserRewards_Aggregate;
  /** fetch data from the table: "userRewards" using primary key columns */
  userRewards_by_pk?: Maybe<UserRewards>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Query_RootNotifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRewardsArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Query_RootRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Query_RootRewards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserRewardsArgs = {
  distinct_on?: InputMaybe<Array<UserRewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserRewards_Order_By>>;
  where?: InputMaybe<UserRewards_Bool_Exp>;
};


export type Query_RootUserRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserRewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserRewards_Order_By>>;
  where?: InputMaybe<UserRewards_Bool_Exp>;
};


export type Query_RootUserRewards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "rewards" */
export type Rewards = {
  __typename?: 'rewards';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  userRewards: Array<UserRewards>;
  /** An aggregate relationship */
  userRewards_aggregate: UserRewards_Aggregate;
};


/** columns and relationships of "rewards" */
export type RewardsUserRewardsArgs = {
  distinct_on?: InputMaybe<Array<UserRewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserRewards_Order_By>>;
  where?: InputMaybe<UserRewards_Bool_Exp>;
};


/** columns and relationships of "rewards" */
export type RewardsUserRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserRewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserRewards_Order_By>>;
  where?: InputMaybe<UserRewards_Bool_Exp>;
};

/** aggregated selection of "rewards" */
export type Rewards_Aggregate = {
  __typename?: 'rewards_aggregate';
  aggregate?: Maybe<Rewards_Aggregate_Fields>;
  nodes: Array<Rewards>;
};

/** aggregate fields of "rewards" */
export type Rewards_Aggregate_Fields = {
  __typename?: 'rewards_aggregate_fields';
  avg?: Maybe<Rewards_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Rewards_Max_Fields>;
  min?: Maybe<Rewards_Min_Fields>;
  stddev?: Maybe<Rewards_Stddev_Fields>;
  stddev_pop?: Maybe<Rewards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rewards_Stddev_Samp_Fields>;
  sum?: Maybe<Rewards_Sum_Fields>;
  var_pop?: Maybe<Rewards_Var_Pop_Fields>;
  var_samp?: Maybe<Rewards_Var_Samp_Fields>;
  variance?: Maybe<Rewards_Variance_Fields>;
};


/** aggregate fields of "rewards" */
export type Rewards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rewards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Rewards_Avg_Fields = {
  __typename?: 'rewards_avg_fields';
  points?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "rewards". All fields are combined with a logical 'AND'. */
export type Rewards_Bool_Exp = {
  _and?: InputMaybe<Array<Rewards_Bool_Exp>>;
  _not?: InputMaybe<Rewards_Bool_Exp>;
  _or?: InputMaybe<Array<Rewards_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  isAvailable?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  points?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userRewards?: InputMaybe<UserRewards_Bool_Exp>;
  userRewards_aggregate?: InputMaybe<UserRewards_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "rewards" */
export enum Rewards_Constraint {
  /** unique or primary key constraint on columns "id" */
  RewardsPkey = 'rewards_pkey'
}

/** input type for incrementing numeric columns in table "rewards" */
export type Rewards_Inc_Input = {
  points?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "rewards" */
export type Rewards_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userRewards?: InputMaybe<UserRewards_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rewards_Max_Fields = {
  __typename?: 'rewards_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Rewards_Min_Fields = {
  __typename?: 'rewards_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "rewards" */
export type Rewards_Mutation_Response = {
  __typename?: 'rewards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rewards>;
};

/** input type for inserting object relation for remote table "rewards" */
export type Rewards_Obj_Rel_Insert_Input = {
  data: Rewards_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rewards_On_Conflict>;
};

/** on_conflict condition type for table "rewards" */
export type Rewards_On_Conflict = {
  constraint: Rewards_Constraint;
  update_columns?: Array<Rewards_Update_Column>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};

/** Ordering options when selecting data from "rewards". */
export type Rewards_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  isAvailable?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userRewards_aggregate?: InputMaybe<UserRewards_Aggregate_Order_By>;
};

/** primary key columns input for table: rewards */
export type Rewards_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "rewards" */
export enum Rewards_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsAvailable = 'isAvailable',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "rewards" */
export type Rewards_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Rewards_Stddev_Fields = {
  __typename?: 'rewards_stddev_fields';
  points?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Rewards_Stddev_Pop_Fields = {
  __typename?: 'rewards_stddev_pop_fields';
  points?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Rewards_Stddev_Samp_Fields = {
  __typename?: 'rewards_stddev_samp_fields';
  points?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "rewards" */
export type Rewards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rewards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rewards_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Rewards_Sum_Fields = {
  __typename?: 'rewards_sum_fields';
  points?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "rewards" */
export enum Rewards_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsAvailable = 'isAvailable',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Rewards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Rewards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rewards_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rewards_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Rewards_Var_Pop_Fields = {
  __typename?: 'rewards_var_pop_fields';
  points?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Rewards_Var_Samp_Fields = {
  __typename?: 'rewards_var_samp_fields';
  points?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Rewards_Variance_Fields = {
  __typename?: 'rewards_variance_fields';
  points?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table in a streaming manner: "auth.users" */
  auth_users_stream: Array<Auth_Users>;
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  /** fetch data from the table: "notifications" using primary key columns */
  notifications_by_pk?: Maybe<Notifications>;
  /** fetch data from the table in a streaming manner: "notifications" */
  notifications_stream: Array<Notifications>;
  /** fetch data from the table: "rewards" */
  rewards: Array<Rewards>;
  /** fetch aggregated fields from the table: "rewards" */
  rewards_aggregate: Rewards_Aggregate;
  /** fetch data from the table: "rewards" using primary key columns */
  rewards_by_pk?: Maybe<Rewards>;
  /** fetch data from the table in a streaming manner: "rewards" */
  rewards_stream: Array<Rewards>;
  /** An array relationship */
  userRewards: Array<UserRewards>;
  /** An aggregate relationship */
  userRewards_aggregate: UserRewards_Aggregate;
  /** fetch data from the table: "userRewards" using primary key columns */
  userRewards_by_pk?: Maybe<UserRewards>;
  /** fetch data from the table in a streaming manner: "userRewards" */
  userRewards_stream: Array<UserRewards>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootNotifications_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootNotifications_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Notifications_Stream_Cursor_Input>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


export type Subscription_RootRewardsArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Subscription_RootRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rewards_Order_By>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Subscription_RootRewards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRewards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rewards_Stream_Cursor_Input>>;
  where?: InputMaybe<Rewards_Bool_Exp>;
};


export type Subscription_RootUserRewardsArgs = {
  distinct_on?: InputMaybe<Array<UserRewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserRewards_Order_By>>;
  where?: InputMaybe<UserRewards_Bool_Exp>;
};


export type Subscription_RootUserRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserRewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserRewards_Order_By>>;
  where?: InputMaybe<UserRewards_Bool_Exp>;
};


export type Subscription_RootUserRewards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUserRewards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserRewards_Stream_Cursor_Input>>;
  where?: InputMaybe<UserRewards_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "userRewards" */
export type UserRewards = {
  __typename?: 'userRewards';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  reward?: Maybe<Rewards>;
  rewardId?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregated selection of "userRewards" */
export type UserRewards_Aggregate = {
  __typename?: 'userRewards_aggregate';
  aggregate?: Maybe<UserRewards_Aggregate_Fields>;
  nodes: Array<UserRewards>;
};

export type UserRewards_Aggregate_Bool_Exp = {
  count?: InputMaybe<UserRewards_Aggregate_Bool_Exp_Count>;
};

export type UserRewards_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<UserRewards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserRewards_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "userRewards" */
export type UserRewards_Aggregate_Fields = {
  __typename?: 'userRewards_aggregate_fields';
  avg?: Maybe<UserRewards_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<UserRewards_Max_Fields>;
  min?: Maybe<UserRewards_Min_Fields>;
  stddev?: Maybe<UserRewards_Stddev_Fields>;
  stddev_pop?: Maybe<UserRewards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<UserRewards_Stddev_Samp_Fields>;
  sum?: Maybe<UserRewards_Sum_Fields>;
  var_pop?: Maybe<UserRewards_Var_Pop_Fields>;
  var_samp?: Maybe<UserRewards_Var_Samp_Fields>;
  variance?: Maybe<UserRewards_Variance_Fields>;
};


/** aggregate fields of "userRewards" */
export type UserRewards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserRewards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "userRewards" */
export type UserRewards_Aggregate_Order_By = {
  avg?: InputMaybe<UserRewards_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserRewards_Max_Order_By>;
  min?: InputMaybe<UserRewards_Min_Order_By>;
  stddev?: InputMaybe<UserRewards_Stddev_Order_By>;
  stddev_pop?: InputMaybe<UserRewards_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<UserRewards_Stddev_Samp_Order_By>;
  sum?: InputMaybe<UserRewards_Sum_Order_By>;
  var_pop?: InputMaybe<UserRewards_Var_Pop_Order_By>;
  var_samp?: InputMaybe<UserRewards_Var_Samp_Order_By>;
  variance?: InputMaybe<UserRewards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "userRewards" */
export type UserRewards_Arr_Rel_Insert_Input = {
  data: Array<UserRewards_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserRewards_On_Conflict>;
};

/** aggregate avg on columns */
export type UserRewards_Avg_Fields = {
  __typename?: 'userRewards_avg_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "userRewards" */
export type UserRewards_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "userRewards". All fields are combined with a logical 'AND'. */
export type UserRewards_Bool_Exp = {
  _and?: InputMaybe<Array<UserRewards_Bool_Exp>>;
  _not?: InputMaybe<UserRewards_Bool_Exp>;
  _or?: InputMaybe<Array<UserRewards_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  reward?: InputMaybe<Rewards_Bool_Exp>;
  rewardId?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "userRewards" */
export enum UserRewards_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRewardsPkey = 'UserRewards_pkey'
}

/** input type for incrementing numeric columns in table "userRewards" */
export type UserRewards_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "userRewards" */
export type UserRewards_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  reward?: InputMaybe<Rewards_Obj_Rel_Insert_Input>;
  rewardId?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type UserRewards_Max_Fields = {
  __typename?: 'userRewards_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  rewardId?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "userRewards" */
export type UserRewards_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  rewardId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type UserRewards_Min_Fields = {
  __typename?: 'userRewards_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  rewardId?: Maybe<Scalars['uuid']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "userRewards" */
export type UserRewards_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  rewardId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "userRewards" */
export type UserRewards_Mutation_Response = {
  __typename?: 'userRewards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserRewards>;
};

/** on_conflict condition type for table "userRewards" */
export type UserRewards_On_Conflict = {
  constraint: UserRewards_Constraint;
  update_columns?: Array<UserRewards_Update_Column>;
  where?: InputMaybe<UserRewards_Bool_Exp>;
};

/** Ordering options when selecting data from "userRewards". */
export type UserRewards_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  reward?: InputMaybe<Rewards_Order_By>;
  rewardId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: userRewards */
export type UserRewards_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "userRewards" */
export enum UserRewards_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RewardId = 'rewardId',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "userRewards" */
export type UserRewards_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  rewardId?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type UserRewards_Stddev_Fields = {
  __typename?: 'userRewards_stddev_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "userRewards" */
export type UserRewards_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type UserRewards_Stddev_Pop_Fields = {
  __typename?: 'userRewards_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "userRewards" */
export type UserRewards_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type UserRewards_Stddev_Samp_Fields = {
  __typename?: 'userRewards_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "userRewards" */
export type UserRewards_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "userRewards" */
export type UserRewards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserRewards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserRewards_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  rewardId?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type UserRewards_Sum_Fields = {
  __typename?: 'userRewards_sum_fields';
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "userRewards" */
export type UserRewards_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "userRewards" */
export enum UserRewards_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  RewardId = 'rewardId',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type UserRewards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserRewards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserRewards_Set_Input>;
  /** filter the rows which have to be updated */
  where: UserRewards_Bool_Exp;
};

/** aggregate var_pop on columns */
export type UserRewards_Var_Pop_Fields = {
  __typename?: 'userRewards_var_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "userRewards" */
export type UserRewards_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type UserRewards_Var_Samp_Fields = {
  __typename?: 'userRewards_var_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "userRewards" */
export type UserRewards_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type UserRewards_Variance_Fields = {
  __typename?: 'userRewards_variance_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "userRewards" */
export type UserRewards_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  createdAt: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  notifications: Array<Notifications>;
  /** An aggregate relationship */
  notifications_aggregate: Notifications_Aggregate;
  password: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Auth_Users;
  /** An array relationship */
  userRewards: Array<UserRewards>;
  /** An aggregate relationship */
  userRewards_aggregate: UserRewards_Aggregate;
  username: Scalars['String']['output'];
};


/** columns and relationships of "users" */
export type UsersNotificationsArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNotifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notifications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Notifications_Order_By>>;
  where?: InputMaybe<Notifications_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUserRewardsArgs = {
  distinct_on?: InputMaybe<Array<UserRewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserRewards_Order_By>>;
  where?: InputMaybe<UserRewards_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUserRewards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserRewards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserRewards_Order_By>>;
  where?: InputMaybe<UserRewards_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  points?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  notifications?: InputMaybe<Notifications_Bool_Exp>;
  notifications_aggregate?: InputMaybe<Notifications_Aggregate_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  points?: InputMaybe<Int_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Auth_Users_Bool_Exp>;
  userRewards?: InputMaybe<UserRewards_Bool_Exp>;
  userRewards_aggregate?: InputMaybe<UserRewards_Aggregate_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfilesPkey = 'profiles_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  points?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notifications?: InputMaybe<Notifications_Arr_Rel_Insert_Input>;
  password?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Auth_Users_Obj_Rel_Insert_Input>;
  userRewards?: InputMaybe<UserRewards_Arr_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notifications_aggregate?: InputMaybe<Notifications_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_Users_Order_By>;
  userRewards_aggregate?: InputMaybe<UserRewards_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Points = 'points',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  points?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  points?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Points = 'points',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Username = 'username'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  points?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type ClearReadNotificationsMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type ClearReadNotificationsMutation = { __typename?: 'mutation_root', delete_notifications?: { __typename?: 'notifications_mutation_response', returning: Array<{ __typename?: 'notifications', message?: string | null }> } | null };

export type DeleteRewardMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteRewardMutation = { __typename?: 'mutation_root', delete_rewards_by_pk?: { __typename?: 'rewards', id: any, name?: string | null } | null };

export type GetNotificationsQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetNotificationsQuery = { __typename?: 'query_root', notifications: Array<{ __typename?: 'notifications', id: any, message?: string | null, user?: { __typename?: 'users', email: string, id: any, points?: number | null, username: string } | null }> };

export type GetRewardsQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  createdAt?: InputMaybe<Order_By>;
}>;


export type GetRewardsQuery = { __typename?: 'query_root', rewards: Array<{ __typename?: 'rewards', id: any, image?: string | null, isAvailable?: boolean | null, name?: string | null, points?: number | null, quantity?: number | null }> };

export type GetSingleRewardQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetSingleRewardQuery = { __typename?: 'query_root', rewards_by_pk?: { __typename?: 'rewards', id: any, image?: string | null, isAvailable?: boolean | null, name?: string | null, points?: number | null, quantity?: number | null } | null };

export type GetUserQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: any, email: string, points?: number | null, role?: string | null, username: string } | null };

export type GetUserRewardsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type GetUserRewardsQuery = { __typename?: 'query_root', userRewards: Array<{ __typename?: 'userRewards', id: any, quantity?: number | null, rewardId?: any | null, status?: string | null, reward?: { __typename?: 'rewards', name?: string | null, image?: string | null, points?: number | null } | null }> };

export type InsertNotificationMutationVariables = Exact<{
  message: Scalars['String']['input'];
  userId: Scalars['uuid']['input'];
}>;


export type InsertNotificationMutation = { __typename?: 'mutation_root', insert_notifications_one?: { __typename?: 'notifications', id: any, message?: string | null, user?: { __typename?: 'users', id: any, username: string, email: string, points?: number | null } | null } | null };

export type InsertRewardMutationVariables = Exact<{
  name: Scalars['String']['input'];
  image: Scalars['String']['input'];
  points: Scalars['Int']['input'];
  isAvailable: Scalars['Boolean']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type InsertRewardMutation = { __typename?: 'mutation_root', insert_rewards_one?: { __typename?: 'rewards', id: any, name?: string | null, image?: string | null, points?: number | null, isAvailable?: boolean | null, quantity?: number | null } | null };

export type InsertUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  username: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  points: Scalars['Int']['input'];
  role: Scalars['String']['input'];
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', username: string, email: string, password: string, points?: number | null, role?: string | null } | null };

export type RequestRewardMutationVariables = Exact<{
  quantity: Scalars['Int']['input'];
  rewardId: Scalars['uuid']['input'];
  status: Scalars['String']['input'];
  userId: Scalars['uuid']['input'];
}>;


export type RequestRewardMutation = { __typename?: 'mutation_root', insert_userRewards_one?: { __typename?: 'userRewards', id: any, quantity?: number | null, rewardId?: any | null, status?: string | null, userId?: any | null } | null };

export type UpdatePasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  encrypted_password: Scalars['String']['input'];
}>;


export type UpdatePasswordMutation = { __typename?: 'mutation_root', update_auth_users?: { __typename?: 'auth_users_mutation_response', returning: Array<{ __typename?: 'auth_users', email?: string | null }> } | null };

export type UpdatePointsMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  points: Scalars['Int']['input'];
}>;


export type UpdatePointsMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', username: string, email: string, points?: number | null } | null };

export type UpdateQuantityMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  quantity: Scalars['Int']['input'];
  isAvailable: Scalars['Boolean']['input'];
}>;


export type UpdateQuantityMutation = { __typename?: 'mutation_root', update_rewards_by_pk?: { __typename?: 'rewards', name?: string | null, image?: string | null, quantity?: number | null, points?: number | null, isAvailable?: boolean | null } | null };

export type UpdateRewardMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateRewardMutation = { __typename?: 'mutation_root', update_rewards_by_pk?: { __typename?: 'rewards', id: any, image?: string | null, isAvailable?: boolean | null, name?: string | null, points?: number | null, quantity?: number | null } | null };


export const ClearReadNotificationsDocument = `
    mutation ClearReadNotifications($userId: uuid!) {
  delete_notifications(where: {isRead: {_eq: true}, userId: {_eq: $userId}}) {
    returning {
      message
    }
  }
}
    `;
export const useClearReadNotificationsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<ClearReadNotificationsMutation, TError, ClearReadNotificationsMutationVariables, TContext>
    ) =>
    useMutation<ClearReadNotificationsMutation, TError, ClearReadNotificationsMutationVariables, TContext>(
      ['ClearReadNotifications'],
      (variables?: ClearReadNotificationsMutationVariables) => fetcher<ClearReadNotificationsMutation, ClearReadNotificationsMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ClearReadNotificationsDocument, variables)(),
      options
    );
export const DeleteRewardDocument = `
    mutation DeleteReward($id: uuid!) {
  delete_rewards_by_pk(id: $id) {
    id
    name
  }
}
    `;
export const useDeleteRewardMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<DeleteRewardMutation, TError, DeleteRewardMutationVariables, TContext>
    ) =>
    useMutation<DeleteRewardMutation, TError, DeleteRewardMutationVariables, TContext>(
      ['DeleteReward'],
      (variables?: DeleteRewardMutationVariables) => fetcher<DeleteRewardMutation, DeleteRewardMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, DeleteRewardDocument, variables)(),
      options
    );
export const GetNotificationsDocument = `
    query getNotifications($userId: uuid!) {
  notifications(where: {userId: {_eq: $userId}}) {
    id
    message
    user {
      email
      id
      points
      username
    }
  }
}
    `;
export const useGetNotificationsQuery = <
      TData = GetNotificationsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetNotificationsQueryVariables,
      options?: UseQueryOptions<GetNotificationsQuery, TError, TData>
    ) =>
    useQuery<GetNotificationsQuery, TError, TData>(
      ['getNotifications', variables],
      fetcher<GetNotificationsQuery, GetNotificationsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetNotificationsDocument, variables),
      options
    );
export const GetRewardsDocument = `
    query GetRewards($limit: Int!, $offset: Int!, $createdAt: order_by = asc) {
  rewards(offset: $offset, limit: $limit) {
    id
    image
    isAvailable
    name
    points
    quantity
  }
}
    `;
export const useGetRewardsQuery = <
      TData = GetRewardsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetRewardsQueryVariables,
      options?: UseQueryOptions<GetRewardsQuery, TError, TData>
    ) =>
    useQuery<GetRewardsQuery, TError, TData>(
      ['GetRewards', variables],
      fetcher<GetRewardsQuery, GetRewardsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetRewardsDocument, variables),
      options
    );
export const GetSingleRewardDocument = `
    query GetSingleReward($id: uuid!) {
  rewards_by_pk(id: $id) {
    id
    image
    isAvailable
    name
    points
    quantity
  }
}
    `;
export const useGetSingleRewardQuery = <
      TData = GetSingleRewardQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetSingleRewardQueryVariables,
      options?: UseQueryOptions<GetSingleRewardQuery, TError, TData>
    ) =>
    useQuery<GetSingleRewardQuery, TError, TData>(
      ['GetSingleReward', variables],
      fetcher<GetSingleRewardQuery, GetSingleRewardQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetSingleRewardDocument, variables),
      options
    );
export const GetUserDocument = `
    query GetUser($id: uuid!) {
  users_by_pk(id: $id) {
    id
    email
    points
    role
    username
  }
}
    `;
export const useGetUserQuery = <
      TData = GetUserQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: GetUserQueryVariables,
      options?: UseQueryOptions<GetUserQuery, TError, TData>
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      ['GetUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserDocument, variables),
      options
    );
export const GetUserRewardsDocument = `
    query GetUserRewards($userId: uuid) {
  userRewards(where: {userId: {_eq: $userId}}) {
    id
    quantity
    rewardId
    status
    reward {
      name
      image
      points
    }
  }
}
    `;
export const useGetUserRewardsQuery = <
      TData = GetUserRewardsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetUserRewardsQueryVariables,
      options?: UseQueryOptions<GetUserRewardsQuery, TError, TData>
    ) =>
    useQuery<GetUserRewardsQuery, TError, TData>(
      variables === undefined ? ['GetUserRewards'] : ['GetUserRewards', variables],
      fetcher<GetUserRewardsQuery, GetUserRewardsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserRewardsDocument, variables),
      options
    );
export const InsertNotificationDocument = `
    mutation InsertNotification($message: String!, $userId: uuid!) {
  insert_notifications_one(object: {message: $message, userId: $userId}) {
    id
    message
    user {
      id
      username
      email
      points
    }
  }
}
    `;
export const useInsertNotificationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<InsertNotificationMutation, TError, InsertNotificationMutationVariables, TContext>
    ) =>
    useMutation<InsertNotificationMutation, TError, InsertNotificationMutationVariables, TContext>(
      ['InsertNotification'],
      (variables?: InsertNotificationMutationVariables) => fetcher<InsertNotificationMutation, InsertNotificationMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, InsertNotificationDocument, variables)(),
      options
    );
export const InsertRewardDocument = `
    mutation InsertReward($name: String!, $image: String!, $points: Int!, $isAvailable: Boolean!, $quantity: Int!) {
  insert_rewards_one(
    object: {name: $name, image: $image, points: $points, isAvailable: $isAvailable, quantity: $quantity}
  ) {
    id
    name
    image
    points
    isAvailable
    quantity
  }
}
    `;
export const useInsertRewardMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<InsertRewardMutation, TError, InsertRewardMutationVariables, TContext>
    ) =>
    useMutation<InsertRewardMutation, TError, InsertRewardMutationVariables, TContext>(
      ['InsertReward'],
      (variables?: InsertRewardMutationVariables) => fetcher<InsertRewardMutation, InsertRewardMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, InsertRewardDocument, variables)(),
      options
    );
export const InsertUserDocument = `
    mutation InsertUser($id: uuid!, $username: String!, $email: String!, $password: String!, $points: Int!, $role: String!) {
  insert_users_one(
    object: {id: $id, username: $username, email: $email, password: $password, points: $points, role: $role}
  ) {
    username
    email
    password
    points
    role
  }
}
    `;
export const useInsertUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<InsertUserMutation, TError, InsertUserMutationVariables, TContext>
    ) =>
    useMutation<InsertUserMutation, TError, InsertUserMutationVariables, TContext>(
      ['InsertUser'],
      (variables?: InsertUserMutationVariables) => fetcher<InsertUserMutation, InsertUserMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, InsertUserDocument, variables)(),
      options
    );
export const RequestRewardDocument = `
    mutation RequestReward($quantity: Int!, $rewardId: uuid!, $status: String!, $userId: uuid!) {
  insert_userRewards_one(
    object: {quantity: $quantity, rewardId: $rewardId, status: $status, userId: $userId}
  ) {
    id
    quantity
    rewardId
    status
    userId
  }
}
    `;
export const useRequestRewardMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<RequestRewardMutation, TError, RequestRewardMutationVariables, TContext>
    ) =>
    useMutation<RequestRewardMutation, TError, RequestRewardMutationVariables, TContext>(
      ['RequestReward'],
      (variables?: RequestRewardMutationVariables) => fetcher<RequestRewardMutation, RequestRewardMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, RequestRewardDocument, variables)(),
      options
    );
export const UpdatePasswordDocument = `
    mutation UpdatePassword($email: String!, $encrypted_password: String!) {
  update_auth_users(
    where: {email: {_eq: $email}}
    _set: {encrypted_password: $encrypted_password}
  ) {
    returning {
      email
    }
  }
}
    `;
export const useUpdatePasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdatePasswordMutation, TError, UpdatePasswordMutationVariables, TContext>
    ) =>
    useMutation<UpdatePasswordMutation, TError, UpdatePasswordMutationVariables, TContext>(
      ['UpdatePassword'],
      (variables?: UpdatePasswordMutationVariables) => fetcher<UpdatePasswordMutation, UpdatePasswordMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdatePasswordDocument, variables)(),
      options
    );
export const UpdatePointsDocument = `
    mutation UpdatePoints($id: uuid!, $points: Int!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {points: $points}) {
    username
    email
    points
  }
}
    `;
export const useUpdatePointsMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdatePointsMutation, TError, UpdatePointsMutationVariables, TContext>
    ) =>
    useMutation<UpdatePointsMutation, TError, UpdatePointsMutationVariables, TContext>(
      ['UpdatePoints'],
      (variables?: UpdatePointsMutationVariables) => fetcher<UpdatePointsMutation, UpdatePointsMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdatePointsDocument, variables)(),
      options
    );
export const UpdateQuantityDocument = `
    mutation UpdateQuantity($id: uuid!, $quantity: Int!, $isAvailable: Boolean!) {
  update_rewards_by_pk(
    pk_columns: {id: $id}
    _set: {quantity: $quantity, isAvailable: $isAvailable}
  ) {
    name
    image
    quantity
    points
    isAvailable
  }
}
    `;
export const useUpdateQuantityMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdateQuantityMutation, TError, UpdateQuantityMutationVariables, TContext>
    ) =>
    useMutation<UpdateQuantityMutation, TError, UpdateQuantityMutationVariables, TContext>(
      ['UpdateQuantity'],
      (variables?: UpdateQuantityMutationVariables) => fetcher<UpdateQuantityMutation, UpdateQuantityMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateQuantityDocument, variables)(),
      options
    );
export const UpdateRewardDocument = `
    mutation UpdateReward($id: uuid!, $image: String, $isAvailable: Boolean, $name: String, $points: Int, $quantity: Int) {
  update_rewards_by_pk(
    pk_columns: {id: $id}
    _set: {image: $image, isAvailable: $isAvailable, name: $name, points: $points, quantity: $quantity}
  ) {
    id
    image
    isAvailable
    name
    points
    quantity
  }
}
    `;
export const useUpdateRewardMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<UpdateRewardMutation, TError, UpdateRewardMutationVariables, TContext>
    ) =>
    useMutation<UpdateRewardMutation, TError, UpdateRewardMutationVariables, TContext>(
      ['UpdateReward'],
      (variables?: UpdateRewardMutationVariables) => fetcher<UpdateRewardMutation, UpdateRewardMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, UpdateRewardDocument, variables)(),
      options
    );