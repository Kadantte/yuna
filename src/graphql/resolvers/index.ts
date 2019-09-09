import { isWatchedResolver } from './is-watched'
import { scoreMalResolver } from './score-mal'
import { CacheEpisodesResolver } from './cache-episodes'
import { EpisodesResolver } from './episodes'
import {
  AddToList,
  DeleteFromList,
  EditListEntry,
  GetListEntry,
  StartRewatching,
  UpdateProgress,
  UpdateScore,
  UpdateStatus,
} from './list-entry'

export const resolvers = {
  Query: {
    Episodes: EpisodesResolver,
    ListEntry: GetListEntry,
  },
  Media: {
    scoreMal: scoreMalResolver,
    listEntry: GetListEntry,
  },
  Episode: {
    isWatched: isWatchedResolver,
  },
  Mutation: {
    CacheEpisodes: CacheEpisodesResolver,
    AddToList,
    DeleteFromList,
    UpdateStatus,
    UpdateProgress,
    UpdateScore,
    StartRewatching,
    EditListEntry,
  },
}
