using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Web.Configuration;
using Telerik.Web.UI;

    public class RadSchedulerDatabaseProvider : SchedulerProviderBase
    {
        private static readonly string connectionString = WebConfigurationManager
                                                            .ConnectionStrings["SchedulerConnectionString"]
                                                            .ConnectionString;

        public override IEnumerable<Appointment> GetAppointments(RadScheduler owner)
        {
            var appointmentsList = new List<Appointment>();
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                var sql = @"SELECT * 
                              FROM Appointments 
                             WHERE [Start] >= @start 
                               AND [End] <= @end";
                var start = owner.VisibleRangeStart;
                var end = owner.VisibleRangeEnd;
                using (var command = new SqlCommand(sql, connection))
                {
                    command.Parameters.AddWithValue("start", start);
                    command.Parameters.AddWithValue("end", end);
                    using (var reader = command.ExecuteReader())
                    {
                        try
                        {
                            while (reader.Read())
                            {
                                var appointment = new Appointment();
                                appointment.ID = reader.GetInt32(0);
                                appointment.Subject = reader.GetString(1);
                                appointment.Description = reader.IsDBNull(2) ? null : reader.GetString(2);
                                appointment.Start = reader.GetDateTime(3);
                                appointment.End = reader.GetDateTime(4);
                                appointment.RecurrenceRule = reader.IsDBNull(7) ? null : reader.GetString(7);
                                appointment.RecurrenceParentID = reader.IsDBNull(8) ? null : reader.GetValue(8);
                                appointmentsList.Add(appointment);
                            }
                        }
                        catch (Exception)
                        {
                            // Error handling logic
                        }
                    }
                }
            }

            return appointmentsList;
        }


        public override void Insert(RadScheduler owner, Appointment appointmentToInsert)
        {
            var recurrentParentId = appointmentToInsert.RecurrenceParentID ?? DBNull.Value;
            string sql = @"INSERT INTO Appointments (
                                        [Subject], 
                                        [Description], 
                                        [Start], 
                                        [End], 
                                        [RecurrenceRule], 
                                        [RecurrenceParentID]) 
                                    VALUES (
                                        @subject,
                                        @description,
                                        @start,
                                        @end,
                                        @recurrenceRule,
                                        @recurrenceParentID)";

            using (var connection = new SqlConnection(connectionString))
            using (var command = new SqlCommand(sql, connection))
            {
                try
                {
                    command.Parameters.AddWithValue("subject", appointmentToInsert.Subject);
                    command.Parameters.AddWithValue("description", appointmentToInsert.Description);
                    command.Parameters.AddWithValue("start", appointmentToInsert.Start);
                    command.Parameters.AddWithValue("end", appointmentToInsert.End);
                    command.Parameters.AddWithValue("recurrenceRule", appointmentToInsert.RecurrenceRule);
                    command.Parameters.AddWithValue("recurrenceParentID", recurrentParentId);
                    connection.Open();
                    command.ExecuteNonQuery();
                }
                catch (Exception)
                {
                    // Error handling logic
                }
            }

        }

        public override void Update(RadScheduler owner, Appointment appointmentToUpdate)
        {
            var recurrentParentId = appointmentToUpdate.RecurrenceParentID ?? DBNull.Value;

            string sql = @"UPDATE Appointments 
                                  SET [Subject] = @subject,
                                    [Description] = @description, 
                                    [Start] = @start, 
                                    [End] = @end, 
                                    [RecurrenceRule] = @recurrenceRule, 
                                    [RecurrenceParentID] = @recurrenceParentID 
                                  WHERE [ID] = @id";

            using (var connection = new SqlConnection(connectionString))
            using (var command = new SqlCommand(sql, connection))
            {
                try
                {
                    command.Parameters.AddWithValue("id", appointmentToUpdate.ID);
                    command.Parameters.AddWithValue("subject", appointmentToUpdate.Subject);
                    command.Parameters.AddWithValue("description", appointmentToUpdate.Description);
                    command.Parameters.AddWithValue("start", appointmentToUpdate.Start);
                    command.Parameters.AddWithValue("end", appointmentToUpdate.End);
                    command.Parameters.AddWithValue("recurrenceRule", appointmentToUpdate.RecurrenceRule);
                    command.Parameters.AddWithValue("recurrenceParentID", recurrentParentId);
                    connection.Open();
                    command.ExecuteNonQuery();
                }
                catch (Exception)
                {
                    // Error handling logic
                }
            }
        }

        public override void Delete(RadScheduler owner, Appointment appointmentToDelete)
        {
            string sql = "DELETE FROM Appointments WHERE [ID] = @id";
            using (var connection = new SqlConnection(connectionString))
            using (var command = new SqlCommand(sql, connection))
            {
                try
                {
                    command.Parameters.AddWithValue("id", appointmentToDelete.ID);
                    connection.Open();
                    command.ExecuteNonQuery();
                }
                catch (Exception)
                {
                    // Error handling logic
                }
            }
        }

        public override IEnumerable<ResourceType> GetResourceTypes(RadScheduler owner)
        {
            var resourcesList = new List<ResourceType>();
            return resourcesList;
        }

        public override IEnumerable<Resource> GetResourcesByType(RadScheduler owner, string resourceType)
        {
            var resourcesList = new List<Resource>();
            return resourcesList;
        }
    }
