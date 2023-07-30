import { Schema, model, models } from 'mongoose';

const announcementSchema = new Schema({
    NEWSID: String,
    SCRIP_CD: Number,
    XML_NAME: String,
    NEWSSUB: String,
    DT_TM: Date,
    NEWS_DT: Date,
    CRITICALNEWS: Number,
    ANNOUNCEMENT_TYPE: String,
    QUARTER_ID: Number,
    FILESTATUS: String,
    ATTACHMENTNAME: String,
    MORE: String,
    HEADLINE: String,
    CATEGORYNAME: String,
    OLD: Number,
    RN: Number,
    PDFFLAG: Number,
    NSURL: String,
    SLONGNAME: String,
    AGENDA_ID: Number,
    TotalPageCnt: Number,
    News_submission_dt: Date,
    DissemDT: Date,
    TimeDiff: String,
    Fld_Attachsize: Number,
    SUBCATNAME: String,
    AUDIO_VIDEO_FILE: String
});

export const Announcement = models.Announcement || model('Announcement', announcementSchema);
