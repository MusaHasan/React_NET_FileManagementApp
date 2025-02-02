﻿namespace React_NET_FileManagement.Data.Models
{
    public class Filter
    {
        public byte? LevelOfImportance { get; set; } = null;
        public string? SpecifiedTime { get; set; } = null;
        public DateTime? SpecifideDate { get; set; } = null;
        public DateTime? StartDate { get; set; } = null;
        public DateTime? EndDate { get; set; } = null;
        public bool All {get; set;} = false;
        public bool Done {get; set;} = false;
        public bool Deleted { get; set; } = false;
    }
}
