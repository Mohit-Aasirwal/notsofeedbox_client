export interface HeroSec {
	id: string;
	attributes: IHero;
}
export interface StatSec {
	id: string;
	attributes: IStat;
}

export interface ITimeline {
	timeline_title: string;
	timeline_desc: string;
}

export interface IEvents {
	month: string;
	date: string;
	title_event: string;
	location: string;
}

export interface IAchievement {
	title_achievement: string;
	desc_achievement: string;
	image: string;
}

export interface ITeam {
	Name: string;
	Designation: string;
	Photo: string;
}

export interface TeamSec {
	id: string;
	attributes: ITeam;
}

export interface AchieveSec {
	id: string;
	attributes: IAchievement;
}

export interface EventSec {
	id: string;
	attributes: IEvents;
}

export interface TimelineSec {
	id: string;
	attributes: ITimeline;
}

export interface IStat {
	stat_value: number;
	stat_desc: string;
}

export interface IHero {
	Main_Title: string;
	Main_Desc: string;
	button_name: string;
	button_link: string;
	Front_IMG: string;
}

export interface IPagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

export interface IResourceMeta {
	pagination: IPagination;
}

export interface CollectionResponse<T> {
	data: T;
	meta: IResourceMeta;
}

export interface layout {
	hero: HeroSec[];
	stat: StatSec[];
	timeline: TimelineSec[];
	event: EventSec[];
	achievement: AchieveSec[];
	team: TeamSec[];
}
